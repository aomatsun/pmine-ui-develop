import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { createAppStore, startEthVtxWeb3 } from '@groot/shared/data-access/store';
import { Provider } from 'react-redux';
import App from './app/app';

const store = createAppStore();

startEthVtxWeb3(store)
  .then(store =>
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    ));

