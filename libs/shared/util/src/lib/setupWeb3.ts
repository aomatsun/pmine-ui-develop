import Web3 from 'web3';
import {
  setWeb3,
  addAccount,
  loadContractSpec,
  loadContractInstance,
  start,
  authorizeAndSetWeb3,
} from 'ethvtx/lib/dispatchers';
import { Store } from 'redux';
import { WalletLinkProvider } from 'walletlink';
import { contracts, tokens } from './contractIDs';
import { MasterChefABI, mcByteCode } from './contracts/MasterChefABI';
import {
  StkgRootToBnbABI,
  stkgRootToBNBByteCode,
} from './contracts/stkgRootToBNBABI';
import {
  EthTestABI,
  EthTestByteCode,
} from './contracts/EthTestABI';
import { PancakeLPABI, pcByteCode } from './contracts/PancakeLPABI';

declare global {
  interface Window {
    ethereum?: WalletLinkProvider;
    web3: any;
  }
}

export const setupWeb3 = async (store: Store): Promise<void> => {
  // If wallet provider requires authorization
  if (window.ethereum) {
    // This will be called only when user grants authorization
    const provider = window.ethereum;

    const web3 = new Web3(provider);

    const accounts = await web3.eth.getAccounts();
    if (accounts.length) {
      addAccount(store.dispatch, accounts[0], {
      alias: '@default',
      permanent: true,
      });
    }

      /*
    const web3_getter = async (): Promise<Web3> => {
      // recover provider

      //
      // const accounts = await web3.eth.getAccounts();
      // if (accounts.length) {
      //   addAccount(store.dispatch, accounts[0], {
      //     alias: '@default',
      //     permanent: true,
      //   });
      // }
      return web3;
    };

    // Assume we are in an async context and we are able to use await
    await authorizeAndSetWeb3(store.dispatch, {
      // explicitly recard a returned Promise with content to a void Promise
      enable: window.ethereum.enable as unknown as () => Promise<void>,
      web3: web3_getter,
    });

    */
  } else if (window.web3) {
    // Here we use the provider to build the web3 version we want
    const web3 = new Web3(window.web3.currentProvider);

    setWeb3(store.dispatch, web3);
    //
    // const accounts = await web3.eth.getAccounts();
    // if (accounts.length) {
    //   addAccount(store.dispatch, accounts[0], {
    //     alias: '@default',
    //     permanent: true,
    //   });
    // }
    //
    // // ######    Load your contract specifications
    // loadContractSpec(store.dispatch, 'MasterChef', MasterChefABI, {
    //   bin: mcByteCode,
    //   constructor_bin: mcByteCode,
    //   permanent: true, // By default false
    // });
    // loadContractSpec(store.dispatch, 'StkgRootToBnb', StkgRootToBnbABI, {
    //   bin: stkgRootToBNBByteCode,
    //   constructor_bin: stkgRootToBNBByteCode,
    //   permanent: true, // By default false
    // });
    // loadContractSpec(store.dispatch, 'LP', PancakeLPABI, {
    //   bin: pcByteCode,
    //   constructor_bin: pcByteCode,
    //   permanent: true, // By default false
    // });
    //
    // // #########    Load your contract instances
    // loadContractInstance(
    //   store.dispatch,
    //   'MasterChef',
    //   contracts.Master_Chef_Farming,
    //   {
    //     balance: true,
    //     alias: '@default',
    //     permanent: true, // By default false
    //   }
    // );
    // loadContractInstance(
    //   store.dispatch,
    //   'StkgRootToBnb',
    //   contracts.Stk_gRoot_BNB,
    //   {
    //     balance: true,
    //     alias: '@default',
    //     permanent: true, // By default false
    //   }
    // );
    // loadContractInstance(store.dispatch, 'LP', tokens['GROOT/BNB'], {
    //   balance: true,
    //   alias: '@default',
    //   permanent: true, // By default false
    // });
    //
    // start(store.dispatch);
  } else {
    console.error('This is not a dapp ?!');
  }
};

export const loadEthVtxContracts = (store: Store) => {
  // ######    Load your contract specifications
  loadContractSpec(store.dispatch, 'MasterChef', MasterChefABI, {
    bin: mcByteCode,
    constructor_bin: mcByteCode,
    permanent: true, // By default false
  });
  loadContractSpec(store.dispatch, 'StkgRootToBnb', StkgRootToBnbABI, {
    bin: stkgRootToBNBByteCode,
    constructor_bin: stkgRootToBNBByteCode,
    permanent: true, // By default false
  });
  loadContractSpec(store.dispatch, 'LP', PancakeLPABI, {
    bin: pcByteCode,
    constructor_bin: pcByteCode,
    permanent: true, // By default false
  });

  loadContractSpec(store.dispatch, 'ETH', EthTestABI, {
    bin: EthTestByteCode,
    constructor_bin: EthTestByteCode,
    permanent: true, // By default false
  });

  // #########    Load your contract instances
  loadContractInstance(
    store.dispatch,
    'MasterChef',
    contracts.Master_Chef_Farming,
    {
      balance: true,
      alias: '@default',
      permanent: true, // By default false
    }
  );
  loadContractInstance(
    store.dispatch,
    'StkgRootToBnb',
    tokens["GROOT/BNB"].stk_contract,
    {
      balance: true,
      alias: '@default',
      permanent: true, // By default false
    }
  );

  loadContractInstance(store.dispatch, 'LP', tokens["GROOT/BNB"].contract, {
    balance: true,
    alias: '@default',
    permanent: true, // By default false
  });

  loadContractInstance(store.dispatch, 'ETH', contracts.Eth_Test_Contract, {
    balance: true,
    alias: '@default',
    permanent: true, // By default false
  });
}
