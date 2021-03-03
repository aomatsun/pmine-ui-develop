import React from 'react';
import { Faq } from '@groot/groot/ui/landing/components/faq';
import styled from 'styled-components';

import { Header } from '@groot/groot/components/header';
// import GlobalStyle from '../../../assets/global-styles';
import GlobalStyle from 'apps/groot-ui/src/assets/global-styles';

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
      <Header onToggle={props.onToggle} address={props.address} />

      <br />
      <hr />
      <br />

      <StyledGrootUiLanding>
        <h1>Welcome to gROOT</h1>
        <br/>
        <Faq />
      </StyledGrootUiLanding>
      <GlobalStyle />

    </div>
  );
}

export default GrootUiLanding;
