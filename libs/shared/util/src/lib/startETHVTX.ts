import { start } from 'ethvtx/lib/dispatchers';
import { Store } from 'redux';

export const startETHVTX = (store: Store) => {
  start(store.dispatch);
}
