import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createAppStore } from '@groot/shared/data-access/store';

const store = createAppStore();

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    expect(getByText('Welcome to gROOT')).toBeTruthy();
  });
});
