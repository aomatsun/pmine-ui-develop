import { createAction } from '@reduxjs/toolkit';
import { CoinGeckoSimplePricesResult } from './liquidity.data-types';

export const getPricesStart = createAction<{ ids: string[] }>('app/liquidity/GET_PRICES_START');
export const getPricesSuccess = createAction<{ prices: CoinGeckoSimplePricesResult }>('app/liquidity/GET_PRICES_SUCCESS');
export const getPricesFailure = createAction<{ error: Error }>('app/liquidity/GET_PRICES_FAILURE');

export const getPairsStart = createAction<{ ids: string[] }>('app/liquidity/GET_PAIRS_START');
export const getPairsSuccess = createAction<{ pairs: string[], pairDayDatas: any }>('app/liquidity/GET_PAIRS_SUCCESS');
export const getPairsFailure = createAction<{ error: Error }>('app/liquidity/GET_PAIRS_FAILURE');

export const getStakedLiquidityStart = createAction<void>('app/liquidity/GET_STAKED_LIQUIDITY_START');
export const getStakedLiquiditySuccess = createAction<{ stakedLiquidityPools: any }>('app/liquidity/GET_STAKED_LIQUIDITY_SUCCESS');
export const getStakedLiquidityFailure = createAction<{ error: Error }>('app/liquidity/GET_STAKED_LIQUIDITY_FAILURE');
