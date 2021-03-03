import { createStore, IModule, IModuleStore } from "redux-dynamic-modules";
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import { AppStore } from './app-store';
import { loadEthVtxContracts, setupWeb3, startETHVTX } from '@groot/shared/util';
import { getReducers, getInitialState, configureVtx } from 'ethvtx';
import { getEthVtxExtraModule } from './ethvtx-module';


// ETHVTX: TO BE MOVED Your initial state and configuration
const initial_state = configureVtx(getInitialState(), {
  poll_timer: 6000, // every minute for now
});

export const createAppStore = (appEnhancers = []): IModuleStore<unknown> => {
  const sagaExtension = getSagaExtension();
  const store = createStore(
    {
      initialState: {
        ...initial_state,
      },
      enhancers: [ /** enhancers to include */ ...appEnhancers],
      extensions: [sagaExtension],

      // This adds the ethvtx reducers
      advancedCombineReducers: getReducers,
    },
  );

  // This adds the ethvtx sagas dynamically, where the sagas require a store ref
  store.addModule(getEthVtxExtraModule(store) as unknown as IModule<any>);

  const s = AppStore.getInstance();
  s.store = store;

  return store;
}

export const startEthVtxWeb3 = async(store) => {
  await setupWeb3(store);
  startETHVTX(store);
  return store;
}
