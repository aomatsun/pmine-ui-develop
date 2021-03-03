import React from 'react';
import { render } from '@testing-library/react';

import GrootUiLandingComponentsFaq from './groot-ui-landing-components-faq';

describe('GrootUiLandingComponentsFaq', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GrootUiLandingComponentsFaq />);
    expect(baseElement).toBeTruthy();
  });
});
