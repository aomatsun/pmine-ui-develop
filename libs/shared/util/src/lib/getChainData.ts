import supportedChains from './chains';
import WalletLink from 'walletlink';

export function getChainData(chainId) {
  const chainData = supportedChains.filter(
    chain => chain.chain_id === chainId,
  )[0];

  if (!chainData) {
    throw new Error('ChainId missing or not supported');
  }

  const API_KEY = '9619f128da304b1c99b821758dc58bb5'; // process.env.REACT_APP_INFURA_ID;

  if (
    chainData.rpc_url.includes('infura.io') &&
    chainData.rpc_url.includes('%API_KEY%') &&
    API_KEY
  ) {
    const rpcUrl = chainData.rpc_url.replace('%API_KEY%', API_KEY);

    return {
      ...chainData,
      rpc_url: rpcUrl,
    };
  }

  return {
    network: null,
  };
}

export const getNetwork = (chainId: number) => getChainData(chainId).network;

// Providers
export const getProviderOptions = () => {
  const walletLink = makeWalletLink();

  const walletLinkProvider = walletLink.makeWeb3Provider(
    `https://mainnet.infura.io/v3/9619f128da304b1c99b821758dc58bb5`,
    1,
  );

  const providerOptions = {
    'custom-walletlink': {
      display: {
        logo: `https://pbs.twimg.com/profile_images/1029780896063184896/jQVcdbAL.jpg`,
        name: 'Coinbase Wallet',
        description: 'Scan with WalletLink to connect',
      },
      package: walletLinkProvider,
      connector: async provider => {
        await provider.enable();

        return provider;
      },
    },
  };

  return providerOptions;
};

// Wallet link
export const makeWalletLink = (appName = 'Groot DeFi') => new WalletLink({
  appName,
  appLogoUrl: 'https://app.growthdefi.com/d6babb6cfb82515bcba8d336fa5da1c1.png',
  darkMode: false,
});
