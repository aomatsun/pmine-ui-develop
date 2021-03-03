import React from 'react';
import { render } from '@testing-library/react';

import GrootUiFarming from './groot-ui-farming';

describe('GrootUiFarming', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GrootUiFarming />);
    expect(baseElement).toBeTruthy();
  });
});
