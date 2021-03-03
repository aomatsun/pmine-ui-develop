import { ISagaModule } from 'redux-dynamic-modules-saga';

import reducer from './liquidity.reducer';
import { LiquidityState } from './liquidity.data-types';
import liquiditySagas from './liquidity.sagas';

export const STATE_NAME = 'liquidity';

export interface LiquidityStateOwnState {
  [STATE_NAME]: LiquidityState;
}

export function getLiquidityModule(
): Array<ISagaModule<LiquidityStateOwnState>> {
  return [
    {
      // Unique id of the module
      id: 'liquidity-state',
      // Maps the Store key to the reducer
      reducerMap: {
        [STATE_NAME]: reducer,
      },

      sagas: [liquiditySagas],
    },
  ];
}
