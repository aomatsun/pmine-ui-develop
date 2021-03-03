import React from 'react';
import { render } from '@testing-library/react';

import GrootComponentsPoolCard, { PoolCard } from './groot-components-pool-card';

describe('GrootComponentsPoolCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GrootComponentsPoolCard  title={"GRO/gROOT"} stakedLP={0} stakedLPInUSD={0.00} totalStaked={0} apy={0} />);
    expect(baseElement).toBeTruthy();
  });
});
