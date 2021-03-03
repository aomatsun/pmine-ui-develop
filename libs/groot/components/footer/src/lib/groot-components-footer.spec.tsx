import React from 'react';
import { render } from '@testing-library/react';

import GrootComponentsFooter from './groot-components-footer';

describe('GrootComponentsFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GrootComponentsFooter />);
    expect(baseElement).toBeTruthy();
  });
});
