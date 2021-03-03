/**
 *
 * HomeContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import styled from 'styled-components';
import DepositContainer from 'containers/DepositContainer';
import WithdrawContainer from 'containers/WithdrawContainer';
import reducer from './liquidity.reducer';
import saga from './saga';
import { PoolList } from './components';
import { getPrices, getPairs, getStakedLiquidity } from './liquidity.actions';
import {
  makeSelectPairs,
  makeSelectPrices,
  makeSelectPairDayDatas,
  makeSelectStakedLiquidityPools,
} from './liquidity.selectors';

const PoolsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

class PoolsContainer extends React.Component {
  state = {
    lp: null,
    isDepositModalOpen: false,
    isWithdrawModalOpen: false,
  };

  toggleDepositModal = lp => {
    const { isDepositModalOpen } = this.state;

    this.setState({ isDepositModalOpen: !isDepositModalOpen, lp });
  };

  toggleWithdrawModal = lp => {
    const { isWithdrawModalOpen } = this.state;

    this.setState({ isWithdrawModalOpen: !isWithdrawModalOpen, lp });
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Liquidity Pools</title>
          <meta name="description" content="rAAVE Liquidity Pools" />
        </Helmet>
        <PoolsWrapper>
          <PoolList
            {...this.state}
            {...this.props}
            toggleDepositModal={this.toggleDepositModal}
            toggleWithdrawModal={this.toggleWithdrawModal}
          />
        </PoolsWrapper>
        <DepositContainer
          {...this.state}
          {...this.props}
          toggleDepositModal={this.toggleDepositModal}
        />
        <WithdrawContainer
          {...this.state}
          {...this.props}
          toggleWithdrawModal={this.toggleWithdrawModal}
        />
      </div>
    );
  }
}

const withReducer = injectReducer({ key: 'poolsReducer', reducer });
const withSaga = injectSaga({ key: 'poolsSaga', saga });

const mapStateToProps = createStructuredSelector({
  prices: makeSelectPrices(),
  pairs: makeSelectPairs(),
  pairDayDatas: makeSelectPairDayDatas(),
  stakedLiquidityPools: makeSelectStakedLiquidityPools(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPrices: ids => dispatch(getPrices(ids)),
    getPairs: ids => dispatch(getPairs(ids)),
    getStakedLiquidity: () => dispatch(getStakedLiquidity()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PoolsContainer);
