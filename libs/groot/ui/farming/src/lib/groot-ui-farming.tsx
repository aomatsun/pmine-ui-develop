import React, { useState } from 'react';
import styled from 'styled-components';
import { PoolCard } from '@groot/groot/components/pool-card';
import { Button } from 'react-bootstrap';
import DepositModal from './DepositModal';
import WithdrawModal from './WithdrawModal';
import StatusModal from './StatusModal';
import * as FarmUtils from '@groot/shared/util';
import Web3 from 'web3';
import {
  contracts,
  tokens,
} from '../../../../../shared/util/src/lib/contractIDs';

import { Header } from '@groot/groot/components/header';
import GlobalStyle from 'apps/groot-ui/src/assets/global-styles';

/* eslint-disable-next-line */
export interface GrootUiFarmingProps {
  onToggle: () => void,
  address: string, 
}

const StyledGrootUiFarming = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: auto;
  margin-bottom: 25px;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const PoolStyledContainers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: auto;
  margin-bottom: 25px;
`;

export function Farming(props: GrootUiFarmingProps) {
  const provider = window.ethereum;
  const web3 = new Web3(provider);
  const [lp, setLp] = useState('GROOT/BNB');
  const [auto, setAuto] = useState(true);
  const [hash, setHash] = useState('Somehash2233');
  const [status, setStatus] = useState('IDLE');
  const [statusMessage, setStatusMessage] = useState(
    'Transaction is pending. '
  );
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);

  const toggleDepositModal = (lp, auto) => {
    setIsDepositModalOpen(!isDepositModalOpen);
    setLp(lp);
    setAuto(auto);
  };

  const toggleWithdrawModal = (lp, auto) => {
    setIsWithdrawModalOpen(!isWithdrawModalOpen);
    setLp(lp);
    setAuto(auto);
  };
  const toggleStatusModal = () => {
    setIsStatusModalOpen(!isStatusModalOpen);
  };

  const adjustAllowance = async (
    web3: any,
    token: string,
    allowance: number
  ): Promise<void> => {
    // NOTE: infinite unlock is a total supply
    let supply = 0;
    const contract = tokens[token].contract;
    const tokenInstance = await new web3.eth.Contract(
      FarmUtils.PancakeLPABI,
      contract
    );
    const userAccounts = await web3.eth.getAccounts();
    const userAddressForActiveAccount = userAccounts[0];

    const spender = auto
      ? tokens[token].stk_contract
      : contracts.Master_Chef_Farming;

    try {
      if (allowance === -1) {
        supply = await FarmUtils.getTokenSupply(web3, token);
      } else {
        supply = allowance * 1;
      }
    } catch (e) {
      console.log('ERROR:', e);
    }

    setStatus('PENDING');
    setStatusMessage('Your tx is pending. ');
    setIsStatusModalOpen(true);

    await tokenInstance.methods
      .approve(spender, FarmUtils.numberToBN(supply, tokens[token].decimal))
      .send({ from: userAddressForActiveAccount })
      .on('transactionHash', (hash) => {
        //put hash in state store
        setHash(hash);

        console.log(hash);
      })
      .on('receipt', () => {
        //update status in state store
      })
      .on('confirmation', () => {
        //update status in state store to SUCCEEDED
        setStatus('SUCCEEDED');
        setStatusMessage(`Your tx completed. Hash: ${hash}`);
      })
      .on('error', async () => {
        //update status in state store to FAILED
        setStatus('FAILED');
        setStatusMessage(`Your tx failed. `);
      });
  };

  const depositToMasterChef = async (
    web3: any,
    amount: number,
    token: string
  ): Promise<void> => {
    const contract = contracts.Master_Chef_Farming;
    const tokenInstance = await new web3.eth.Contract(
      FarmUtils.MasterChefABI,
      contract
    );
    const userAccounts = await web3.eth.getAccounts();
    const userAddressForActiveAccount = userAccounts[0];
    const params = [
      tokens[token].pid,
      FarmUtils.numberToBN(amount, tokens[token].decimal),
    ];
    setStatus('PENDING');
    setStatusMessage('Your tx is pending. ');
    setIsStatusModalOpen(true);

    await tokenInstance.methods
      .deposit(...params)
      .send({ from: userAddressForActiveAccount })
      .on('transactionHash', (hash) => {
        //put hash in state store
        setHash(hash);

        console.log(hash);
      })
      .on('receipt', () => {
        //update status in state store
      })
      .on('confirmation', () => {
        //update status in state store to SUCCEEDED
        setStatus('SUCCEEDED');
        setStatusMessage(`Your tx completed. Hash: ${hash}`);
      })
      .on('error', async () => {
        //update status in state store to FAILED
        setStatus('FAILED');
        setStatusMessage(`Your tx failed. `);
      });
  };

  const depositToCompounding = async (
    web3: any,
    amount: number,
    token: string
  ): Promise<void> => {
    const contract = tokens[token].stk_contract;
    const tokenInstance = await new web3.eth.Contract(
      FarmUtils.StkgRootToBnbABI,
      contract
    );
    const userAccounts = await web3.eth.getAccounts();
    const userAddressForActiveAccount = userAccounts[0];
    const params = [FarmUtils.numberToBN(amount, tokens[token].decimal)];

    setStatus('PENDING');
    setStatusMessage('Your tx is pending. ');
    setIsStatusModalOpen(true);

    await tokenInstance.methods
      .deposit(...params)
      .send({ from: userAddressForActiveAccount })
      .on('transactionHash', (hash) => {
        //put hash in state store
        setHash(hash);

        console.log(hash);
      })
      .on('receipt', () => {
        //update status in state store
      })
      .on('confirmation', () => {
        //update status in state store to SUCCEEDED
        setStatus('SUCCEEDED');
        setStatusMessage(`Your tx completed. Hash: ${hash}`);
      })
      .on('error', async () => {
        //update status in state store to FAILED
        setStatus('FAILED');
        setStatusMessage(`Your tx failed. `);
      });
  };

  const withdrawFromMasterChef = async (
    web3: any,
    amount: number,
    token: string
  ): Promise<void> => {
    const contract = contracts.Master_Chef_Farming;
    const tokenInstance = await new web3.eth.Contract(
      FarmUtils.MasterChefABI,
      contract
    );
    const userAccounts = await web3.eth.getAccounts();
    const userAddressForActiveAccount = userAccounts[0];
    const params = [
      tokens[token].pid,
      FarmUtils.numberToBN(amount, tokens[token].decimal),
    ];

    setStatus('PENDING');
    setStatusMessage('Your tx is pending. ');
    setIsStatusModalOpen(true);

    await tokenInstance.methods
      .withdraw(...params)
      .send({ from: userAddressForActiveAccount })
      .on('transactionHash', (hash) => {
        //put hash in state store
        setHash(hash);

        console.log(hash);
      })
      .on('receipt', () => {
        //update status in state store
      })
      .on('confirmation', () => {
        //update status in state store to SUCCEEDED
        setStatus('SUCCEEDED');
        setStatusMessage(`Your tx completed. Hash: ${hash}`);
      })
      .on('error', async () => {
        //update status in state store to FAILED
        setStatus('FAILED');
        setStatusMessage(`Your tx failed. `);
      });
  };

  const withdrawFromCompounding = async (
    web3: any,
    shares: number,
    token: string
  ): Promise<void> => {
    const contract = tokens[token].stk_contract;
    const tokenInstance = await new web3.eth.Contract(
      FarmUtils.StkgRootToBnbABI,
      contract
    );
    const userAccounts = await web3.eth.getAccounts();
    const userAddressForActiveAccount = userAccounts[0];
    const params = [FarmUtils.numberToBN(shares, tokens[token].decimal)];

    setStatus('PENDING');
    setStatusMessage('Your tx is pending. ');
    setIsStatusModalOpen(true);

    await tokenInstance.methods
      .withdraw(...params)
      .send({ from: userAddressForActiveAccount })
      .on('transactionHash', (hash) => {
        //put hash in state store
        setHash(hash);

        console.log(hash);
      })
      .on('receipt', () => {
        //update status in state store
      })
      .on('confirmation', () => {
        //update status in state store to SUCCEEDED
        setStatus('SUCCEEDED');
        setStatusMessage(`Your tx completed. Hash: ${hash}`);
      })
      .on('error', async () => {
        //update status in state store to FAILED
        setStatus('FAILED');
        setStatusMessage(`Your tx failed. `);
      });
  };

  return (
    <div>
      <Header onToggle={props.onToggle} address={props.address} />

      <br />
      <hr />
      <br />

      <StyledGrootUiFarming>
        <PoolStyledContainers>
          <h2>Manual Compound Farming</h2>
          <hr />
          <PoolCard
            title={'GROOT/BNB'}
            stakedLP={0}
            stakedLPInUSD={0.0}
            totalStaked={0}
            apy={0}
            img_1={'bnb.png'}
            img_2={'groot.png'}
            auto={false}
            toggleDepositModal={toggleDepositModal}
            toggleWithdrawModal={toggleWithdrawModal}
          />
        </PoolStyledContainers>

        <PoolStyledContainers>
          <h2>Auto Compound Farming</h2>
          <hr />
          <PoolCard
            title={'GROOT/BNB'}
            stakedLP={0}
            stakedLPInUSD={0.0}
            totalStaked={0}
            apy={0}
            img_1={'bnb.png'}
            img_2={'groot.png'}
            auto={true}
            toggleDepositModal={toggleDepositModal}
            toggleWithdrawModal={toggleWithdrawModal}
          />
        </PoolStyledContainers>
      </StyledGrootUiFarming>
      <DepositModal
        isDepositModalOpen={isDepositModalOpen}
        toggleDepositModal={toggleDepositModal}
        lp={lp}
        auto={auto}
        depositToCompounding={depositToCompounding}
        depositToMasterChef={depositToMasterChef}
        adjustAllowance={adjustAllowance}
        web3={web3}
      />
      <WithdrawModal
        isWithdrawModalOpen={isWithdrawModalOpen}
        toggleWithdrawModal={toggleWithdrawModal}
        lp={lp}
        auto={auto}
        withdrawFromCompounding={withdrawFromCompounding}
        withdrawFromMasterChef={withdrawFromMasterChef}
        adjustAllowance={adjustAllowance}
        web3={web3}
      />
      <StatusModal
        isStatusModalOpen={isStatusModalOpen}
        toggleStatusModal={toggleStatusModal}
        hash={hash}
        status={status}
        message={statusMessage}
      />

      <GlobalStyle />
    </div>
  );
}

export default Farming;
