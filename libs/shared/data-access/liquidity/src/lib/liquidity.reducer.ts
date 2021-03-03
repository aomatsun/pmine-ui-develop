import { LiquidityState } from './liquidity.data-types';
import { createReducer } from '@reduxjs/toolkit';
import {
  getPairsStart,
  getPairsSuccess,
  getPricesStart,
  getPricesSuccess,
  getStakedLiquidityStart, getStakedLiquiditySuccess
} from './liquidity.actions';

export const initialState: LiquidityState = {
  prices: null,
  pairs: null,
  pairDayDatas: null,
  stakedLiquidityPools: null,
};

const reducer = createReducer(initialState, builder =>
  builder
    .addCase(getPricesStart, (draftState, action) => {
      draftState.prices = {};
    })
    .addCase(getPricesSuccess, (draftState, action) => {
      draftState.prices = action.payload.prices;
    })
    .addCase(getPairsStart, (draftState, action) => {
      draftState.pairs = [];
    })
    .addCase(getPairsSuccess, (draftState, action) => {
      draftState.pairs = action.payload.pairs;
      draftState.pairDayDatas = action.payload.pairDayDatas;
    })
    .addCase(getStakedLiquidityStart, (draftState, action) => {
      draftState.stakedLiquidityPools = [];
    })
    .addCase(getStakedLiquiditySuccess, (draftState, action) => {
      draftState.stakedLiquidityPools = action.payload.stakedLiquidityPools;
    })
);

export default reducer;
