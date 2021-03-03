import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import {Spinner} from 'react-bootstrap';

export interface StatusModalProps {
  isStatusModalOpen: boolean;
  toggleStatusModal: () => void;
  hash: string;
  status: string;
  message: string;
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
    zIndex: 4,
    textAlign: "center"
  },
};

const StatusModal = (props: StatusModalProps) => {
  const handleOnCloseRequest = () => {
    props.toggleStatusModal();
  };

  const statusMode = () => {
    if (props.status === 'PENDING') {
      return (
        <div>
          <h2>Transaction is Pending </h2>

          <hr style={{ borderColor: 'gray', borderWidth: 1, width: '100%' }} />
          <Spinner animation="border" variant="info" />

          <p>{props.message}</p>
        </div>
      );
    } else if (props.status === 'FAILED') {
      return (
        <div>
          <h2>Transaction Failed </h2>

          <hr style={{ borderColor: 'gray', borderWidth: 1, width: '100%' }} />

          <p>{props.message}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Transaction Succeeded </h2>

          <hr style={{ borderColor: 'gray', borderWidth: 1, width: '100%' }} />

          <p>{props.message}</p>
        </div>
      );
    }
  };
  return (
    <Modal
      style={customStyles}
      isOpen={props.isStatusModalOpen}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      onRequestClose={handleOnCloseRequest}
    >
      {statusMode()}
    </Modal>
  );
};

export default StatusModal;
