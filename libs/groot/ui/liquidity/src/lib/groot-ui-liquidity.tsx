import React from 'react';
import styled from 'styled-components';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { getLiquidityModule } from '@groot/shared/data-access/liquidity';

/* eslint-disable-next-line */
export interface GrootUiLiquidityProps {}

const StyledGrootUiLiquidity = styled.div`
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

export function GrootUiLiquidity(props: GrootUiLiquidityProps) {
  return (
    <DynamicModuleLoader modules={[getLiquidityModule()]}>
      <StyledGrootUiLiquidity>
        <h1>Join a Pool on Pancake Swap</h1>
        <iframe
          src="https://exchange.pancakeswap.finance/#/add/ETH/0x8b571fe684133aca1e926beb86cb545e549c832d"
          title="Pancake Swap"
        ></iframe>
      </StyledGrootUiLiquidity>
    </DynamicModuleLoader>
  );
}

export default GrootUiLiquidity;
