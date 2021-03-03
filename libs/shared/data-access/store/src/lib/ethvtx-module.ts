import { ISagaModule } from 'redux-dynamic-modules-saga';
import { getSagas } from 'ethvtx';

export const STATE_NAME = 'ethvtx-extra';

export interface EthVtxExtraStateOwnState {
  [STATE_NAME]: {
    extra: null
  };
}

export function getEthVtxExtraModule(storeRef):
  Array<ISagaModule<EthVtxExtraStateOwnState>> {
  return [
    {
      // Unique id of the module
      id: 'ethvtx-extra',
      // Maps the Store key to the reducer
      reducerMap: {
        [STATE_NAME]: () => ({ extra: null }),
      },

      sagas: [getSagas(storeRef)]
    },
  ];
}
