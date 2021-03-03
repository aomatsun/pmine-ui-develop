/* eslint-disable @typescript-eslint/no-explicit-any */

import { contracts, tokens } from '../contractIDs';
import { MasterChefABI } from '../contracts/MasterChefABI';
import { StkgRootToBnbABI } from '../contracts/stkgRootToBNBABI';
import { PancakeLPABI } from '../contracts/PancakeLPABI';
import { numberToBN, BNtoNumber } from '../shared-util';

/**
 * @param web3 A reference to web3
 * @param token The address of the token type you want the balance for
 * @returns {Promise<number>}
 */
export const getTokenSupply = async (
  web3: any,
  token: string
): Promise<number> => {
  const contract = tokens[token].contract;
  const tokenInstance = await new web3.eth.Contract(PancakeLPABI, contract);
  const supply = await tokenInstance.methods.totalSupply().call();
  return parseFloat(BNtoNumber(supply, tokens[token].decimal));
};

/**
 * Gets the allowance for the LP spending.
 * @param web3 A web3 instance
 * @param token The LP token to withdraw
 * @returns {Promise<number>}
 */
export const getAllowance = async (
  web3: any,
  token: string,
  spender: string
): Promise<number> => {
  const userAccounts = await web3.eth.getAccounts();
  const userAddressForActiveAccount = userAccounts[0];
  const contract = tokens[token].contract;

  const tokenInstance = await new web3.eth.Contract(PancakeLPABI, contract);
  const allowance = await tokenInstance.methods
    .allowance(userAddressForActiveAccount, spender)
    .call();
  return parseFloat(BNtoNumber(allowance, tokens[token].decimal));
};

/**
 * unlocks and approves spending for tokens
 * @param web3 A reference to web3
 * @param token The token to unlock and adjust.
 * @param spender The address of the spender
 * @returns {Promise<void>}
 */
export const approveAllowance = async (
  web3: any,
  token: string,
  isMasterChef: boolean
): Promise<void> => {
  adjustAllowance(web3, token, isMasterChef, -1);
};

/**
 * Locks and revokes spending for tokens
 * @param web3 A reference to web3
 * @param token The token to unlock and adjust.
 * @param spender The address of the spender
 * @returns {Promise<void>}
 */
export const revokeAllowance = async (
  web3: any,
  token: string,
  isMasterChef: boolean
): Promise<void> => {
  adjustAllowance(web3, token, isMasterChef, 0);
};

/**
 * Adjusts the spending allowance for tokens
 * @param web3 A reference to web3
 * @param token The token to unlock and adjust.
 * @param spender The address of the spender
 * @param allowance The amount to adjust
 * @returns {Promise<void>}
 */
export const adjustAllowance = async (
  web3: any,
  token: string,
  isMasterChef: boolean,
  allowance: number
): Promise<void> => {
  // NOTE: infinite unlock is a total supply
  let supply = 0;
  const contract = tokens[token].contract;
  const tokenInstance = await new web3.eth.Contract(PancakeLPABI, contract);
  const userAccounts = await web3.eth.getAccounts();
  const userAddressForActiveAccount = userAccounts[0];
  const spender = isMasterChef
    ? contracts.Master_Chef_Farming
    : tokens[token].stk_contract;

  try {
    if (allowance === -1) {
      supply = await getTokenSupply(web3, token);
    } else {
      supply = allowance * 1;
    }
  } catch (e) {
    console.log('ERROR:', e);
  }

  await tokenInstance.methods
    .approve(spender, numberToBN(supply, tokens[token].decimal))
    .send({ from: userAddressForActiveAccount })
    .on('transactionHash', (hash) => {
      // eslint-disable-next-line no-console
      console.log('hash', hash);
    })
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    .on('receipt', () => {})
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    .on('confirmation', () => {})
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    .on('error', async () => {});
};

/**
 * Deposits to the masterchef staking contract for gROOT/BNB pair.
 * @param web3 A web3 instance
 * @param amount The amount to deposit on the LP compound staking contract.
 * @param token The LP token to deposit
 * @returns {Promise<void>}
 */
export const depositToMasterChef = async (
  web3: any,
  amount: number,
  token: string
): Promise<void> => {
  const contract = contracts.Master_Chef_Farming;
  const tokenInstance = await new web3.eth.Contract(MasterChefABI, contract);
  const userAccounts = await web3.eth.getAccounts();
  const userAddressForActiveAccount = userAccounts[0];
  const params = [tokens[token].pid, numberToBN(amount, tokens[token].decimal)];

  await tokenInstance.methods
    .deposit(...params)
    .send({ from: userAddressForActiveAccount })
    .on('transactionHash', (hash) => {
      //put hash in state store

      console.log(hash);
    })
    .on('receipt', () => {
      //update status in state store
    })
    .on('confirmation', () => {
      //update status in state store to SUCCEEDED
    })
    .on('error', async () => {
      //update status in state store to FAILED
    });
};

/**
 * Deposit to the compounding staking contract for gROOT/BNB pair.
 * @param web3 A web3 instance
 * @param amount The amount to deposit on master chef contract
 * @param token The LP token to deposit
 * @returns {Promise<void>}
 */
export const depositToCompounding = async (
  web3: any,
  amount: number,
  token: string
): Promise<void> => {
  const contract = tokens[token].stk_contract;
  const tokenInstance = await new web3.eth.Contract(StkgRootToBnbABI, contract);
  const userAccounts = await web3.eth.getAccounts();
  const userAddressForActiveAccount = userAccounts[0];
  const params = [numberToBN(amount, tokens[token].decimal)];

  await tokenInstance.methods
    .deposit(...params)
    .send({ from: userAddressForActiveAccount })
    .on('transactionHash', (hash) => {
      //put hash in state store

      console.log(hash);
    })
    .on('receipt', () => {
      //update status in state store
    })
    .on('confirmation', () => {
      //update status in state store to SUCCEEDED
    })
    .on('error', async () => {
      //update status in state store to FAILED
    });
};

/**
 * Withdraw from the masterchef staking contract for gROOT/BNB pair.
 * @param web3 A web3 instance
 * @param pid The id of the staking pair
 * @param amount The amount on masterchef contract to withdraw
 * @param token The LP token to withdraw
 * @returns {Promise<void>}
 */
export const withdrawFromMasterChef = async (
  web3: any,
  amount: number,
  token: string
): Promise<void> => {
  const contract = contracts.Master_Chef_Farming;
  const tokenInstance = await new web3.eth.Contract(MasterChefABI, contract);
  const userAccounts = await web3.eth.getAccounts();
  const userAddressForActiveAccount = userAccounts[0];
  const params = [tokens[token].pid, numberToBN(amount, tokens[token].decimal)];

  await tokenInstance.methods
    .withdraw(...params)
    .send({ from: userAddressForActiveAccount })
    .on('transactionHash', (hash) => {
      //put hash in state store

      console.log(hash);
    })
    .on('receipt', () => {
      //update status in state store
    })
    .on('confirmation', () => {
      //update status in state store to SUCCEEDED
    })
    .on('error', async () => {
      //update status in state store to FAILED
    });
};

/**
 * Withdraws from the compounding staking contract for gROOT/BNB pair.
 * @param web3 A web3 instance
 * @param shares The number of shares to withdraw
 * @param token The LP token to withdraw
 * @returns {Promise<void>}
 */
export const withdrawFromCompounding = async (
  web3: any,
  shares: number,
  token: string
): Promise<void> => {
  const contract = tokens[token].stk_contract;
  const tokenInstance = await new web3.eth.Contract(StkgRootToBnbABI, contract);
  const userAccounts = await web3.eth.getAccounts();
  const userAddressForActiveAccount = userAccounts[0];
  const params = [numberToBN(shares, tokens[token].decimal)];

  await tokenInstance.methods
    .withdraw(...params)
    .send({ from: userAddressForActiveAccount })
    .on('transactionHash', (hash) => {
      //put hash in state store

      console.log(hash);
    })
    .on('receipt', () => {
      //update status in state store
    })
    .on('confirmation', () => {
      //update status in state store to SUCCEEDED
    })
    .on('error', async () => {
      //update status in state store to FAILED
    });
};

/**
 * Get user wallet balance for the particular lp token.
 * @param web3 A web3 instance
 * @param token The LP token to check
 * @returns {Promise<number>}
 */
export const getBalanceOf = async (
  web3: any,
  token: string
): Promise<number> => {
  const contract = tokens[token].contract;
  const userAccounts = await web3.eth.getAccounts();
  const userAddressForActiveAccount = userAccounts[0];
  const tokenInstance = await new web3.eth.Contract(PancakeLPABI, contract);
  const balance = await tokenInstance.methods
    .balanceOf(userAddressForActiveAccount)
    .call();
  return parseFloat(BNtoNumber(balance, tokens[token].decimal));
};

/**
 * Get total staked balance for the particular lp token on master chef.
 * @param web3 A web3 instance
 * @param token The LP token to check
 * @returns {Promise<number>}
 */
export const getTotalStakedMC = async (
  web3: any,
  token: string
): Promise<number> => {
  const contract = tokens[token].contract;
  const tokenInstance = await new web3.eth.Contract(PancakeLPABI, contract);
  const totalStaked = await tokenInstance.methods
    .balanceOf(contracts.Master_Chef_Farming)
    .call();
  return parseFloat(BNtoNumber(totalStaked, tokens[token].decimal));
};

/**
 * Get user staked balance for the particular lp token on master chef.
 * @param web3 A web3 instance
 * @param token The LP token to check
 * @returns {Promise<number>}
 */
export const getUserStakedMC = async (
  web3: any,
  token: string
): Promise<number> => {
  const contract = contracts.Master_Chef_Farming;
  const userAccounts = await web3.eth.getAccounts();
  const userAddressForActiveAccount = userAccounts[0];
  const tokenInstance = await new web3.eth.Contract(MasterChefABI, contract);
  const userStaked = await tokenInstance.methods
    .userInfo(tokens[token].pid, userAddressForActiveAccount)
    .call();
  return parseFloat(BNtoNumber(userStaked[0], tokens[token].decimal));
};

/**
 * Get users pending unclaimed rewards.
 * @param web3 A web3 instance
 * @param token The LP token to check
 * @returns {Promise<number>}
 */
export const getUserRewardMC = async (
  web3: any,
  token: string
): Promise<number> => {
  const contract = contracts.Master_Chef_Farming;
  const userAccounts = await web3.eth.getAccounts();
  const userAddressForActiveAccount = userAccounts[0];
  const tokenInstance = await new web3.eth.Contract(MasterChefABI, contract);
  const reward = await tokenInstance.methods
    .pendingCake(tokens[token].pid, userAddressForActiveAccount)
    .call();
  return parseFloat(BNtoNumber(reward[0], tokens[token].decimal));
};

/**
 * Get user shares on the compounding staking contract.
 * @param web3 A web3 instance
 * @param token The LP token to check
 * @returns {Promise<number>}
 */
export const getUserSharesCompounding = async (
  web3: any,
  token: string
): Promise<number> => {
  const contract = tokens[token].stk_contract;
  const userAccounts = await web3.eth.getAccounts();
  const userAddressForActiveAccount = userAccounts[0];
  const tokenInstance = await new web3.eth.Contract(StkgRootToBnbABI, contract);
  const userShares = await tokenInstance.methods
    .balanceOf(userAddressForActiveAccount)
    .call();
  return parseFloat(BNtoNumber(userShares, tokens[token].decimal));
};

/**
 * Get the total reserves on the compounding staking contract.
 * @param web3 A web3 instance
 * @param token The LP token to check
 * @returns {Promise<number>}
 */
export const getTotalReserveCompounding = async (
  web3: any,
  token: string
): Promise<number> => {
  const contract = tokens[token].stk_contract;
  const tokenInstance = await new web3.eth.Contract(StkgRootToBnbABI, contract);
  const reserves = await tokenInstance.methods.totalReserve().call();
  return reserves;
};

/**
 * Get the total supply on the compounding staking contract.
 * @param web3 A web3 instance
 * @param token The LP token to check
 * @returns {Promise<number>}
 */
export const getTotalShareCompounding = async (
  web3: any,
  token: string
): Promise<number> => {
  const contract = tokens[token].stk_contract;
  const tokenInstance = await new web3.eth.Contract(StkgRootToBnbABI, contract);
  const totalSupply = await tokenInstance.methods.totalSupply().call();
  return parseFloat(totalSupply);
};

/**
 * Calculate the share price on the compounding staking contract.
 * @param web3 A web3 instance
 * @param token The LP token to check
 * @returns {Promise<number>}
 */
export const getSharePriceCompounding = async (
  web3: any,
  token: string
): Promise<number> => {
  const totalSupply = await getTotalReserveCompounding(web3, token);
  const totalReserve = await getTotalReserveCompounding(web3, token);

  return parseFloat(
    BNtoNumber(totalReserve / totalSupply, tokens[token].decimal)
  );
};

/**
 * Calculate the shares you would have per LP.
 * @param web3 A web3 instance
 * @param token The LP token to check
 * @returns {Promise<number>}
 */
export const getSharesFromCost = async (
  web3: any,
  token: string,
  amount: number
): Promise<number> => {
  const contract = tokens[token].stk_contract;
  const tokenInstance = await new web3.eth.Contract(StkgRootToBnbABI, contract);
  const shares = await tokenInstance.methods
    .calcSharesFromCost(numberToBN(amount, tokens[token].decimal))
    .call();
  return parseFloat(BNtoNumber(shares, tokens[token].decimal));
};

/**
 * Calculate the LP tokens you would have per shares.
 * @param web3 A web3 instance
 * @param token The LP token to check
 * @returns {Promise<number>}
 */
export const getCostFromShares = async (
  web3: any,
  token: string,
  amount: number
): Promise<number> => {
  const contract = tokens[token].stk_contract;
  const tokenInstance = await new web3.eth.Contract(StkgRootToBnbABI, contract);
  const cost = await tokenInstance.methods
    .calcCostFromShares(numberToBN(amount, tokens[token].decimal))
    .call();
  return parseFloat(BNtoNumber(cost, tokens[token].decimal));
};

/**
 * Get reserves from pancake swap.
 * @param web3 A web3 instance
 * @param token The LP token to check
 * @returns {Promise<number>}
 */
export const getPancakeSwapReserves = async (
  web3: any,
  token: string
): Promise<any> => {
  const contract = tokens[token].contract;
  const tokenInstance = await new web3.eth.Contract(PancakeLPABI, contract);
  const reserves = await tokenInstance.methods.getReserves().call();
  reserves[0] = BNtoNumber(reserves[0], tokens[token].decimal);
  reserves[1] = BNtoNumber(reserves[1], tokens[token].decimal);
  return reserves;
};

/**
 * Calculates the cost per BNB in USD.
 * @param web3 A web3 instance
 * @returns {Promise<number>}
 */
export const getBnbToUSD = async (web3: any): Promise<any> => {
  const contract = tokens['BNB/BUSD'].contract;
  const tokenInstance = await new web3.eth.Contract(PancakeLPABI, contract);
  const reserves = await tokenInstance.methods.getReserves().call();
  reserves[0] = BNtoNumber(reserves[0], tokens['BNB/BUSD'].decimal);
  reserves[1] = BNtoNumber(reserves[1], tokens['BNB/BUSD'].decimal);
  return reserves[1] / reserves[0];
};

/**
 * Calculates USD value of the reserves on the compounding contract.
 * @param web3 A web3 instance
 * @param token The LP token to check
 * @returns {Promise<number>}
 */
export const getCompoundReserveUSD = async (
  web3: any,
  token: string
): Promise<any> => {
  const bnb_to_usd = await getBnbToUSD(web3);
  const pancake_contract = tokens[token].contract;
  const pancake_instance = await new web3.eth.Contract(
    PancakeLPABI,
    pancake_contract
  );
  const lp_in_compound = await getTotalReserveCompounding(web3, token);
  const totalLP = await pancake_instance.methods.totalSupply().call();
  const reserves = await pancake_instance.methods.getReserves().call();
  const compound_perc =
    lp_in_compound / parseFloat(BNtoNumber(totalLP, tokens[token].decimal));
  const usd_reserves =
    parseFloat(BNtoNumber(reserves[1], tokens[token].decimal)) *
    compound_perc *
    bnb_to_usd *
    2;

  return usd_reserves;
};

/**
 * Calculates USD value of the reserves on the Master Chef contract.
 * @param web3 A web3 instance
 * @param token The LP token to check
 * @returns {Promise<number>}
 */
export const getMCReserveUSD = async (
  web3: any,
  token: string
): Promise<any> => {
  const bnb_to_usd = await getBnbToUSD(web3);
  const pancake_contract = tokens[token].contract;
  const pancake_instance = await new web3.eth.Contract(
    PancakeLPABI,
    pancake_contract
  );
  const lp_in_mc = await getTotalStakedMC(web3, token);
  const totalLP = await pancake_instance.methods.totalSupply().call();
  const reserves = await pancake_instance.methods.getReserves().call();
  const mc_perc =
    lp_in_mc / parseFloat(BNtoNumber(totalLP, tokens[token].decimal));
  const usd_reserves =
    parseFloat(BNtoNumber(reserves[1], tokens[token].decimal)) *
    mc_perc *
    bnb_to_usd *
    2;

  return usd_reserves;
};

/**
 * Gets apy data for Master Chef
 * @param web3 A web3 instance
 * @param token The LP token to check
 * @returns {Promise<number>}
 */
export const getAPY_MC = async (web3: any, token: string) => {
  const pancake_contract = tokens[token].contract;
  const pancake_instance = await new web3.eth.Contract(
    PancakeLPABI,
    pancake_contract
  );
  const mc_contract = contracts.Master_Chef_Farming;
  const mc_instance = await new web3.eth.Contract(MasterChefABI, mc_contract);
  const lp_in_mc = await getTotalStakedMC(web3, token);
  const totalLP = await pancake_instance.methods.totalSupply().call();
  const reserves = await pancake_instance.methods.getReserves().call();
  const mc_perc =
    lp_in_mc / parseFloat(BNtoNumber(totalLP, tokens[token].decimal));
  const totalGroot =
    parseFloat(BNtoNumber(reserves[0], tokens[token].decimal)) * mc_perc * 2;
  const grootPerBlock = await mc_instance.methods.cakePerBlock().call();
  const allocReward = grootPerBlock * ((24 * 60 * 60) / 3);
  const totalAllocPoints = await mc_instance.methods.totalAllocPoint().call();
  const poolInfo = await mc_instance.methods.poolInfo(tokens[token].pid).call();
  const poolAllocPoint = poolInfo.allocPoint;
  const apr =
    ((poolAllocPoint / totalAllocPoints) * allocReward * 365) / totalGroot;

  const apy = Math.E ** (apr / 100) - 1;

  return apy / 100;
};

/**
 * Gets apy data for Compounding
 * @param web3 A web3 instance
 * @param token The LP token to check
 * @returns {Promise<number>}
 */
export const getAPY_Compounding = async (web3: any, token: string) => {
  const pancake_contract = tokens[token].contract;
  const pancake_instance = await new web3.eth.Contract(
    PancakeLPABI,
    pancake_contract
  );
  const mc_contract = contracts.Master_Chef_Farming;
  const mc_instance = await new web3.eth.Contract(MasterChefABI, mc_contract);
  const lp_in_compound = await getTotalReserveCompounding(web3, token);
  const lp_in_mc = await getTotalStakedMC(web3, token);
  const totalLP = await pancake_instance.methods.totalSupply().call();
  const reserves = await pancake_instance.methods.getReserves().call();
  const compound_perc =
    lp_in_compound / parseFloat(BNtoNumber(totalLP, tokens[token].decimal));
  const totalGroot =
    parseFloat(BNtoNumber(reserves[0], tokens[token].decimal)) *
    compound_perc *
    2;
  const grootPerBlock = await mc_instance.methods.cakePerBlock().call();
  const allocReward = grootPerBlock * ((24 * 60 * 60) / 3);
  const totalAllocPoints = await mc_instance.methods.totalAllocPoint().call();
  const poolInfo = await mc_instance.methods.poolInfo(tokens[token].pid).call();
  const poolAllocPoint = poolInfo.allocPoint;
  const apr =
  ((poolAllocPoint / totalAllocPoints) * allocReward * 365 * lp_in_compound / lp_in_mc) / totalGroot;

  const apy = Math.E ** (apr / 100) - 1;

  return apy / 100;
};

/**
 * Gets all data for Master Chef
 * @param web3 A web3 instance
 * @param token The LP token to check
 * @returns {Promise<number>}
 */
export const getAllMCData = async (web3: any, token: string): Promise<any> => {
  const totalReserves = await getTotalStakedMC(web3, token);
  const userReserves = await getUserStakedMC(web3, token);
  const usdReserves = await getMCReserveUSD(web3, token);
  const apy = await getAPY_MC(web3, token);
  const data = { totalReserves, userReserves, usdReserves, apy };

  return data;
};

/**
 * Gets all data for Compounding
 * @param web3 A web3 instance
 * @param token The LP token to check
 * @returns {Promise<number>}
 */
export const getAllCompoundingData = async (
  web3: any,
  token: string
): Promise<any> => {
  const totalReserves = await getTotalShareCompounding(web3, token);
  const userReserves = await getUserSharesCompounding(web3, token);
  const usdReserves = await getCompoundReserveUSD(web3, token);
  const apy = await getAPY_Compounding(web3, token);

  const data = { totalReserves, userReserves, usdReserves, apy };

  return data;
};
