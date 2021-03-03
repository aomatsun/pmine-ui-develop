
// Subscribe provider to events
import { addAccount } from 'ethvtx/lib/dispatchers';

export const subscribeProvider = async (provider, store) => {
  if (!provider.on) {
    return;
  }

  provider.on('disconnect', () => console.log("Disconnected."));
  provider.on('accountsChanged', async (accounts) => {
    const acc = await accounts;
    addAccount(store.dispatch, acc[0], {alias: '@default'} );
    console.log('Account has changed');
  });
  provider.on('chainChanged', async (chainId) => {
    //const networkId = await web3.eth.net.getId();
    console.log('Chain changed to ', chainId);
  });

  provider.on('networkChanged', async (networkId) => {
    //const networkId = await web3.eth.networkId();
    console.log('Network changed to ', networkId);
  });
};


