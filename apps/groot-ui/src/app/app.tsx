/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '../assets/global-styles';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { GrootUiLanding } from '@groot/groot/ui/landing';
import { GrootUiSwap } from '@groot/groot/ui/swap';
import { GrootUiLiquidity } from '@groot/groot/ui/liquidity';
import { GrootUiTreasury } from '@groot/groot/ui/treasury';
import { Farming } from '@groot/groot/ui/farming';
import { Header } from '@groot/groot/components/header';
import { GrootComponentsFooter } from '@groot/groot/components/footer';
import { useSelector } from 'react-redux';
import { subscribeProvider } from '@groot/shared/util';
import { getAccount } from 'ethvtx/lib/getters';
import { State } from 'ethvtx/lib/state';
import { AppStore } from '@groot/shared/data-access/store';

const StyledApp = styled.div`
  font-family: sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  padding: 0 16px;
  flex-direction: column;
`;

export const App = (props) => {
  const account = useSelector((state: State) => getAccount(state, '@default'));
  // const lp_contract = useSelector((state: State) => getContract(state, 'LP', '@default'));

  useEffect(() => {
    //create initial wallet subscription.
    subscribeProvider(window.ethereum, AppStore.getInstance().store);
  });

  //toggles the wallet modal
  const onConnect = async () => {
    if (!account) {
      window.ethereum.enable();

    }
  };

  return (
    <StyledApp id="app">
      <Header onToggle={onConnect} address={account ? account.address : null} />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />

      <Route path="/" exact render={(props) => <GrootUiLanding {...props} />} />
      <Route
        path="/swap"
        exact
        render={(props) => <GrootUiSwap {...props} />}
      />
      <Route
        path="/liquidity"
        exact
        render={(props) => <GrootUiLiquidity {...props} />}
      />
      <Route path="/farming" exact render={(props) => <Farming {...props} />} />
      <Route
        path="/treasury"
        exact
        render={(props) => <GrootUiTreasury {...props} />}
      />

      <GrootComponentsFooter />

      {/* END: routes */}
      <GlobalStyle />
    </StyledApp>
  );
};

export default App;
