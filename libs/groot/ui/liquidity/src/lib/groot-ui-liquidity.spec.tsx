import React from 'react';
import { render } from '@testing-library/react';

import GrootUiLiquidity from './groot-ui-liquidity';

describe('GrootUiLiquidity', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GrootUiLiquidity />);
    expect(baseElement).toBeTruthy();
  });
});
