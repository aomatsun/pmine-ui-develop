import React, { useState } from 'react';
import Modal from 'react-modal';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

export interface WithdrawModalProps {
  isWithdrawModalOpen: boolean;
  toggleWithdrawModal: (lp: string, auto: boolean) => void;
  lp: string;
  auto: boolean;
  withdrawFromCompounding: (web3: any, amount: number, token: string) => void;
  withdrawFromMasterChef: (web3: any, amount: number, token: string) => void;
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

const WithdrawModal = (props: WithdrawModalProps) => {
  const [amount, setAmount]: any = useState('');

  const handleOnCloseRequest = () => {
    props.toggleWithdrawModal(props.lp, props.auto);
  };

  const handleWithdraw = () => {
    const amt = typeof (amount * 1) !== 'number' ? 0 : amount;
    console.log(amt)
    if (props.auto) {
      props.withdrawFromCompounding(props.web3, amt, props.lp);
    } else {
      props.withdrawFromMasterChef(props.web3, amt, props.lp);
    }
  };

  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={props.isWithdrawModalOpen}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleOnCloseRequest}
      >
        <h2>Withdraw {props.lp} </h2>
        {props.auto ? 'Auto Compounding' : 'Manual Compounding'}
        <hr style={{ borderColor: 'gray', borderWidth: 1, width: '100%' }} />

        <Form>
          <Form.Group controlId="withdraw-amt">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Amount"
              onChange={(e) => setAmount(e.target.value)}
            />
            <Form.Text className="text-muted">
              Please enter a valid amount.
            </Form.Text>
          </Form.Group>

          <StyledButtonsContainer>
            <Button variant="primary" type="button" onClick={handleWithdraw}>
              Withdraw
            </Button>
          </StyledButtonsContainer>
        </Form>
      </Modal>
    </div>
  );
};

export default WithdrawModal;
