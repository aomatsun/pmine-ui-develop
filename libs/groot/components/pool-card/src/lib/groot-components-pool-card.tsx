import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import * as FarmingFuncs from '@groot/shared/util';
import Web3 from 'web3';
import { contracts, tokens } from '@groot/shared/util';
/* eslint-disable-next-line */
export interface PoolCardProps {
  stakedLP: number;
  stakedLPInUSD: number;
  apy: number;
  totalStaked: number;
  title: string;
  img_1: string;
  img_2: string;
  auto: boolean;
  toggleDepositModal: (lp: string, auto: boolean) => void;
  toggleWithdrawModal: (lp: string, auto: boolean) => void;
}

const StyledPoolCard = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid #17a2b8;
  border-radius: 10px;
  background-color: rgb(40, 37, 47);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: white;

  > div {
    flex: 2;
  }

  > hr {
    border-color: #17a2b8;
    width: 80%;
    flex: 1;
  }

  > .row {
    text-align: left;
    width: 100%;
    flex: 2;
  }

  > .row  .pc-col-1 {
    text-align: left;
  }

  > .row  .pc-col-2 {
    text-align: right;
  }

  > .row .col-md-6 .lp-btn {

    width: 100%;
    min-width: 90px;
  }

  > .row .col-md-6 .lp-btn:hover {
    width: 100%;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    width: 80%;
    height: 500px;
    > .row  .pc-col-1 {
      text-align: center;
    }

    > .row  .pc-col-2 {
      text-align: center;
    }
  }
`;

export function PoolCard(props: PoolCardProps) {
  const [data, setData] = useState(null);
  const web3 = new Web3(window.ethereum);

  const getAllData = async () => {
    if(props.auto){
      setData(await FarmingFuncs.getAllCompoundingData(web3, props.title));
    }
    else {
      setData(await FarmingFuncs.getAllMCData(web3, props.title));
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getAllData();
  }, []);

  const handleDeposit = () => {
    props.toggleDepositModal(props.title, props.auto);
  }

  const handleWithdraw = () => {
    props.toggleWithdrawModal(props.title, props.auto);
  }

  return (
    <StyledPoolCard>
      <h2>{props.title}</h2>
      <div>
        <img
          src={require('../assets/images/' + props.img_1)}
          alt="PairsLogo"
          height="75px"
        />
        <img
          src={require('../assets/images/' + props.img_2)}
          alt="PairsLogo"
          height="75px"
          style={{marginLeft: -25}}
        />
      </div>

      <hr />
      <div className="row">
        <div className="col-md-6 pc-col-1"> Total {props.auto ? "Shares" : "Staked"}</div>
        <div className="col-md-6 pc-col-2"> {data ? data.totalReserves.toFixed(4) : 0} </div>
      </div>
      <div className="row">
        <div className="col-md-6 pc-col-1"> {props.auto ? "Your Shares" : "Your Stake"} </div>
        <div className="col-md-6 pc-col-2"> {data ? data.userReserves : 0}  </div>
      </div>
      <div className="row">
        <div className="col-md-6 pc-col-1"> Value  </div>
        <div className="col-md-6 pc-col-2"> ${data ? data.usdReserves.toFixed(2) : 0} </div>
      </div>
      <div className="row">
        <div className="col-md-6 pc-col-1"> APY  </div>
        <div className="col-md-6 pc-col-2"> {data ? data.apy.toFixed(2) : 0} %  </div>
      </div>
      <div className="row">
        <div className="col-md-6 pc-col-1">
          {' '}
          <Button className="lp-btn" variant="outline-info" onClick={handleDeposit}>Deposit</Button>{' '}
        </div>
        <div className="col-md-6 pc-col-2">
          {' '}
          <Button className="lp-btn" variant="outline-success" onClick={handleWithdraw}>Withdraw</Button>{' '}
        </div>
      </div>

    </StyledPoolCard>
  );
}


export default PoolCard;
