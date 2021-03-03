import React from 'react';
import { Faq } from '@groot/groot/ui/landing/components/faq';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GrootUiLandingProps {}

const StyledGrootUiLanding = styled.div`
  color: white;
  text-align: center;
`;

export function GrootUiLanding(props: GrootUiLandingProps) {
  return (
    <StyledGrootUiLanding>
      <h1>Welcome to gROOT</h1>
      <br/>
      <Faq />
    </StyledGrootUiLanding>
  );
}

export default GrootUiLanding;
