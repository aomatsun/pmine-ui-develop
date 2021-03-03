import { createSelector } from '@reduxjs/toolkit';

const selectSelf = state => state.liquidity;
export const selectPrices = createSelector(selectSelf, substate => substate.prices);
export const selectPairs = createSelector(selectSelf, substate => substate.pairs);
export const selectPairDayDatas = createSelector(selectSelf,substate => substate.pairDayDatas);
export const selectStakedLiquidityPools = createSelector(selectSelf, substate => substate.stakedLiquidityPools);
