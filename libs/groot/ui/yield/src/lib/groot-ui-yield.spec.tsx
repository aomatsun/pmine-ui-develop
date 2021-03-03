import React from 'react';
import { render } from '@testing-library/react';

import GrootUiYield from './groot-ui-yield';

describe('GrootUiYield', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GrootUiYield />);
    expect(baseElement).toBeTruthy();
  });
});
