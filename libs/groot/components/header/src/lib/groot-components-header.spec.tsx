import React from 'react';
import { render } from '@testing-library/react';

import GrootComponentsHeader from './groot-components-header';

describe('GrootComponentsHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GrootComponentsHeader />);
    expect(baseElement).toBeTruthy();
  });
});
