import React, { useState } from 'react';
import Modal from 'react-modal';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getContract } from 'ethvtx/lib/getters';
import { AppStore } from '@groot/shared/data-access/store';
import { AnyAction, Store } from 'redux';
import { State } from 'ethvtx/lib/state';
import * as FarmingFuncs from '@groot/shared/util';
import Web3 from 'web3';
import { contracts, tokens } from '../../../../../shared/util/src/lib/contractIDs';
import { WrappedComponentProps } from 'react-ethvtx/sources/withContracts/index';
export interface DepositModalProps {
  isDepositModalOpen: boolean;
  toggleDepositModal: (lp: string, auto: boolean) => void;
  lp: string;
  auto: boolean;
  depositToCompounding: (web3: any, amount: number, token: string) => void;
  depositToMasterChef: (web3: any, amount: number, token: string) => void;
  adjustAllowance: (web3: any, token: string, allowance: number) => void;
  web3: any;
}

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#232323',
    borderRadius: '25px',
    borderColor: '#17a2b8',
    color: 'white',
    minWidth: '300px',
    width: '40%',
  },
};

const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > Button {
    flex: 1;
    margin: 10px;
  }
`;

const DepositModal = (props: DepositModalProps ) => {
  const [amount, setAmount]: any = useState('');
  const [approved, setApproved] = useState(true);

  const handleOnCloseRequest = () => {
    props.toggleDepositModal(props.lp, props.auto);
  };

  const handleAllowance = async () => {
    //console.log('total supply', test_contract.instance.fn.totalSupply());
    const amt = typeof(amount * 1) !== "number" ? 0 : amount;
    props.adjustAllowance(props.web3, props.lp, amt)

  };

  const handleDeposit = async () => {
    //console.log('total supply', test_contract.instance.fn.totalSupply());

    const amt = typeof(amount * 1) !== "number" ? 0 : amount;


    if(props.auto){
      const approvedAmt = await FarmingFuncs.getAllowance(props.web3, props.lp, tokens[props.lp].stk_contract);
      if(amt <= approvedAmt){
        props.depositToCompounding(props.web3, amt, props.lp)
      }
      else {
        setApproved(false)
      }
    }
    else {
      const approvedAmt = await FarmingFuncs.getAllowance(props.web3, props.lp, contracts.Master_Chef_Farming);
      if(amt <= approvedAmt){
        props.depositToMasterChef(props.web3, amt, props.lp)
      }
      else {
        setApproved(false)
      }

    }

    setTimeout(() => {
      setApproved(true)
    }, 5000)

  };

  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={props.isDepositModalOpen}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleOnCloseRequest}
      >
        <h2>Deposit {props.lp} </h2>
        {props.auto ? 'Auto Compounding' : 'Manual Compounding'}
        <hr style={{ borderColor: 'gray', borderWidth: 1, width: '100%' }} />

        <Form>
          <Form.Group controlId="deposit-amt">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
              onChange={(e) => setAmount(e.target.value)}
            />
            <Form.Text className="text-muted">
              Please enter a valid amount.
            </Form.Text>
          </Form.Group>
          <p style={{color: "red"}}>{approved ? null : "You have to unlock the token amount first before depositing. "}</p>
          <StyledButtonsContainer>
            <Button variant="outline-warning" type="button" onClick={handleAllowance}>
              Unlock
            </Button>
            <Button variant="outline-info" type="button" onClick={handleDeposit}>
              Deposit
            </Button>
          </StyledButtonsContainer>

        </Form>
      </Modal>
    </div>
  );
};

/*
const DepositModalWithContract = withContracts([{
  contract: 'StkgRootToBnb',
  address: tokens["GROOT/BNB"].stk_contract,
  alias: '@default'
}], DepositModal);
*/
export default DepositModal;
