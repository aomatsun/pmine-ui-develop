import React from 'react';
import { render } from '@testing-library/react';

import GrootUiLanding from './groot-ui-landing';

describe('GrootUiLanding', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GrootUiLanding />);
    expect(baseElement).toBeTruthy();
  });
});
