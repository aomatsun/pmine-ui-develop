import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GrootUiSwapProps {}

const StyledGrootUiSwap = styled.div`
  color: white;
  text-align: center;

  > iframe {
    min-width: 350px;
    width: 70%;
    min-height: 700px;
    border-radius: 10px;
    border: 1px solid #17a2b8;
  }
`;

export function GrootUiSwap(props: GrootUiSwapProps) {
  return (
    <StyledGrootUiSwap>
      <h1>Start Swapping with Pancake Swap</h1>
      <iframe src="https://exchange.pancakeswap.finance/#/swap?inputCurrency=BNB&outputCurrency=0x8b571fe684133aca1e926beb86cb545e549c832d" title="Pancake Swap"></iframe>
    </StyledGrootUiSwap>
  );
}

export default GrootUiSwap;
