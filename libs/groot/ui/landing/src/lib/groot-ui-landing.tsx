import React from 'react';
import { Faq } from '@groot/groot/ui/landing/components/faq';
import styled from 'styled-components';

import { Header } from '@groot/groot/components/header';

/* eslint-disable-next-line */
export interface GrootUiLandingProps {
  onToggle: () => void,
  address: string, 
  // account: {
  //   address: string,
  // }
}

const StyledGrootUiLanding = styled.div`
  color: white;
  text-align: center;
`;

export function GrootUiLanding(props: GrootUiLandingProps) {
  return (
    <div>
      {/* <Header onToggle={props.onToggle} address={props.account ? props.account.address : null} /> */}
      <Header onToggle={props.onToggle} address={props.address} />

      <StyledGrootUiLanding>
        <h1>Welcome to gROOT</h1>
        <br/>
        <Faq />
      </StyledGrootUiLanding>
    </div>
  );
}

export default GrootUiLanding;
