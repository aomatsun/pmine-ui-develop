import { all, call, fork, put } from 'redux-saga/effects';
import CoinGecko from 'coingecko-api';
import {
  getPairsFailure,
  getPairsStart,
  getPairsSuccess,
  getPricesFailure,
  getPricesStart,
  getPricesSuccess,
  getStakedLiquidityFailure,
  getStakedLiquidityStart,
  getStakedLiquiditySuccess
} from './liquidity.actions';
import { CoinGeckoResponse, CoinGeckoSimplePricesResult } from './liquidity.data-types';
import { take } from 'redux-saga-test-plan/matchers';
import { request } from '@groot/shared/util';
import { makePairQuery } from './liquidity.util';

const CoinGeckoClient = new CoinGecko();

/**
 * Watches for the getPricesStart action to be dispatched,
 *  and calls a side-effect method invoking CoinGecko
 */
function* watchGetPrices() {
  while (true) {
    const action = yield take(getPricesStart.type);
    yield fork(getPrices, action.payload);
  }
}

/**
 * Watches for the getPairsStart action to be dispatched,
 *  and calls a side-effect method invoking thegraph
 */
function* watchGetPairs() {
  while (true) {
    const action = yield take(getPairsStart.type);
    yield fork(getPairs, action.payload);
  }
}

/**
 * Watches for the getStakedLiquidyStart action to be dispatched,
 *  and calls a side-effect method invoking thegraph
 */
function* watchGetStakedLiquidity() {
  while (true) {
    const action = yield take(getStakedLiquidityStart.type);
    yield fork(getStakedLiquidity);
  }
}

/**
 * Gets prices from CoinGecko
 * @param ids
 * @param currencies
 */
function* getPrices({ ids, currencies = 'usd' }: { ids: string | string[], currencies?: string | string[] }) {
  try {
    const response: CoinGeckoResponse<CoinGeckoSimplePricesResult> =
      yield call(CoinGeckoClient.simple.price, {
        ids,
        vs_currencies: currencies,
      });

    if (response.success) {
      yield put(getPricesSuccess({ prices: response.data }));
    }
  } catch (e) {
    yield put(getPricesFailure(e));
  }
}

/**
 * Get pair data from Uniswap Query
 * @param ids
 */
function* getPairs({ ids }: { ids: string[] }) {
  try {
    // Get the pairs query
    const query = makePairQuery(ids);
    const queryUrl = `https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2`;
    const options = {
      method: 'POST',
      body: JSON.stringify({ query }),
    };

    const response = yield call(request, queryUrl, options);
    if (response) {
      const { pairs, pairDayDatas }: {
        pairs: string[],
        pairDayDatas: any,
      } = response.data;
      yield put(getPairsSuccess({ pairs, pairDayDatas }));
    }
  } catch (e) {
    yield put(getPairsFailure(e));
  }
}

/**
 * Get staked liquidity from custom query
 */
function* getStakedLiquidity() {
  try {
    const query = `
      {
        stakedLiquidityPools {
          id
          created
          totalSupply
          totalReserve
          name
          symbol
          rewardRatePerWeek
          lockedReward
          rewardPerBlock
        }
      }
    `;

    const queryUrl = `https://api.thegraph.com/subgraphs/name/irvollo/raave`;
    const options = {
      method: 'POST',
      body: JSON.stringify({ query }),
    };

    const response = yield call(request, queryUrl, options);
    if (response) {
      const { stakedLiquidityPools } = response.data;
      yield put(getStakedLiquiditySuccess(stakedLiquidityPools));
    }
  } catch (e) {
    yield put(getStakedLiquidityFailure(e));
  }
}

export default function* liquiditySagas() {
  yield all([
    yield fork(watchGetPrices),
    yield fork(watchGetPairs),
    yield fork(watchGetStakedLiquidity),
  ]);
}
