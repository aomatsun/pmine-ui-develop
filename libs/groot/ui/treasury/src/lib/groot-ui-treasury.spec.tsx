import React from 'react';
import { render } from '@testing-library/react';

import GrootUiTreasury from './groot-ui-treasury';

describe('GrootUiTreasury', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GrootUiTreasury />);
    expect(baseElement).toBeTruthy();
  });
});
