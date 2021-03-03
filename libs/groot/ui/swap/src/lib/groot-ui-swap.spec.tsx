import React from 'react';
import { render } from '@testing-library/react';

import GrootUiSwap from './groot-ui-swap';

describe('GrootUiSwap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GrootUiSwap />);
    expect(baseElement).toBeTruthy();
  });
});
