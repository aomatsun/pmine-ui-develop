import React from 'react';
import { Modal } from 'react-bootstrap';
import { Header } from '@groot/groot/components/header';
import { Button } from 'react-bootstrap';

import styled from 'styled-components';
import GlobalStyle from '../assets/yield-styles';


// import '../assets/stylesheets/block-library-style.min.css';
// import '../assets/stylesheets/contact-form-styless.css';
// import '../assets/stylesheets/dashicons.min.css';
// import '../assets/stylesheets/bootstrap/bootstrap.min.css';
// import '../assets/stylesheets/animate.min.css';
// import '../assets/stylesheets/magnific-popup/magnific-popup.css';
// import '../assets/stylesheets/font-awesome/css/font-awesome.min.css';
import "../assets/stylesheets/custom.css";

import vdcCompound from "../assets/images/vdc-compound.png";
import vdcVolatile from "../assets/images/vdc-volatile.png";
/* eslint-disable-next-line */
export interface GrootUiYieldProps {
  onToggle: () => void,
  address: string, 
}

const StyledPoolCard = styled.div`
  border: 1px solid #17a2b8;
  border-radius: 10px;
  background-color: rgb(40, 37, 47);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: white;
  
  > div {
    flex: 2;
  }

  > hr {
    border-color: #17a2b8;
    width: 80%;
    flex: 1;
  }

  > .row {
    text-align: left;
    width: 100%;
    flex: 2;
  }

  > .row  .pc-col-1 {
    text-align: left;
  }

  > .row  .pc-col-2 {
    text-align: right;
  }

  > .row .col-md-6 .lp-btn {

    width: 100%;
    min-width: 90px;
  }

  > .row .col-md-6 .lp-btn:hover {
    width: 100%;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    height: 500px;
    > .row  .pc-col-1 {
      text-align: center;
    }

    > .row  .pc-col-2 {
      text-align: center;
    }
  }
`;
const compound= [
  { address: "ry26ds*",  amount: "1.78", staked: "71.15%"},
  { address: "master*",  amount: "0.67", staked: "26.74%"},
  { address: "intrna*",  amount: "0.03", staked: "1.14%"},
  { address: "ghost3*",  amount: "0.01", staked: "0.52%"},
  { address: "ightcg*",  amount: "0.00", staked: "0.16%"},
  { address: "hwdebo*",  amount: "0.00", staked: "0.15%"},
  { address: "edmiw3*",  amount: "0.00", staked: "0.04%"},
  { address: "poopys*",  amount: "0.00", staked: "0.03%"},
  { address: "fuufuu*",  amount: "0.00", staked: "0.02%"},
  { address: "mastod*",  amount: "0.00", staked: "0.02%"}
];
const volatile= [
  { address: "ry26ds*",  amount: "1.78", staked: "71.15%"},
  { address: "master*",  amount: "0.67", staked: "26.74%"},
  { address: "intrna*",  amount: "0.03", staked: "1.14%"},
  { address: "ghost3*",  amount: "0.01", staked: "0.52%"},
  { address: "ightcg*",  amount: "0.00", staked: "0.16%"},
  { address: "hwdebo*",  amount: "0.00", staked: "0.15%"},
  { address: "edmiw3*",  amount: "0.00", staked: "0.04%"},
  { address: "poopys*",  amount: "0.00", staked: "0.03%"},
  { address: "fuufuu*",  amount: "0.00", staked: "0.02%"},
  { address: "mastod*",  amount: "0.00", staked: "0.02%"}
];

export function GrootUiYield(props: GrootUiYieldProps) {
  return (
    <div> 
      <div className="Uniswap container" style={{paddingTop:'0%'}}>
        <div className="row text-center margin-auto">
                <div className="col-md-12">
                    <h1 className="componenet-title" style={{fontSize:'57px'}}>GRO/gROOT STAKING</h1>
                </div>
            </div>
            <div className="row text-center margin-auto" style={{paddingTop: '25px'}}>
                <div className="col-md-6 col-md-offset-3 vdc-balance-div margin-auto">
                    <p className="text-white margin-bottom-zero" style={{display: 'flex',justifyContent: 'space-between'}}>BNB
                        Balance : <span id="iostBalance">0</span></p>
                    <p className="text-white margin-bottom-zero" style={{display: 'flex',justifyContent: 'space-between'}}>gROOT
                        Balance : <span id="pmineBalance">0</span></p>
                    <p className="text-white margin-bottom-zero" style={{display: 'flex',justifyContent: 'space-between'}}>GRO
                        Balance : <span id="perBalance">0</span></p>
                </div>
            </div>
            <div className="row margin-auto">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <h2 className="loans-page_orange-color" style={{marginBottom: '0px'}}>GRO Yield</h2>
                            {/* <p className="loans-page_orange-color">1% PMINE Daily drip pool</p> */}
                        </div>
                    </div>

                    <div className="row text-center vdc-alert" id="statusVDC1Msg">
                    </div>

                    <div className="uniswap-container" style={{background:'transparent'}}>
                        <div className="swap">
                            <StyledPoolCard style={{height:'auto'}}>
                            <form action="" autoComplete="off">
                                <div className="containers">
                                    <div className="row text-center">
                                        <div className="col-md-4 col-sm-12">
                                            <input type="number" placeholder="0.0" id="vdc1-deposit-amount" />
                                            <br />
                                            {/* <div align-center="center" style={{marginTop: '10px'}}>
                                                <a href="javascript:void(0);" className="rocket-button gold-rocket-button"
                                                  id="vdc1-deposit-btn">
                                                    <div className="default">Deposit</div>
                                                </a>
                                            </div> */}
                                            <Button className="lp-btn" style={{marginTop: '10px'}} variant="outline-info" >Deposit</Button>
                                        </div>

                                        <div className="col-md-4 col-sm-12">
                                          <img src={vdcCompound} alt="profile" style={{height:'70px', marginTop:'5px'}}/>
                                        </div>

                                        <div className="col-md-4 col-sm-12">
                                            <input type="number" placeholder="0.0" id="vdc1-withdraw-amount" />
                                            <br/>
                                            {/* <div align-center="center" style={{marginTop: '10px'}}>
                                                <a href="javascript:void(0);" className="rocket-button gold-rocket-button"
                                                  id="vdc1-withdraw-btn">
                                                    <div className="default">Withdraw</div>
                                                </a>
                                            </div> */}
                                            <Button className="lp-btn btn-leaf" style={{marginTop: '10px'}} >Withdraw </Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="row text-center">
                                    <div className="col-md-12 col-md-offset-3">
                                        <b className="loans-page_orange-color orange-to-white">YOUR HOLDINGS</b>
                                        <br/>
                                    </div>
                                </div>

                                <div className="row text-center">
                                    <div className="col-md-12 col-md-offset-3" id="pmine-holdings-1">
                                        <p className="loans-page_orange-color orange-to-white"><span
                                                    id="vdc1-holding-pmine">0.00000000</span> GRO($0.00)</p>
                                    </div>
                                </div>

                                <div align-center="center">
                                    {/* <a href="javascript:void(0);" className="rocket-button gold-rocket-button"
                                      id="vdc1-claim-btn">
                                        <div className="default">CLAIM REWARDS</div>
                                    </a> */}
                                    <Button className="lp-btn" variant="outline-info" >Claim Rewards </Button>
                                  

                                    <div className="row text-center">
                                        <div className="col-md-12 col-md-offset-3">
                                            <b className="loans-page_orange-color orange-to-white">YOUR REWARDS</b>
                                            <br/>
                                        </div>
                                    </div>

                                    <div className="row text-center">
                                        <div className="col-md-12">
                                            <p className="loans-page_orange-color orange-to-white" style={{marginBottom: '0px'}}>BNB</p>
                                            <p className="loans-page_orange-color orange-to-white" id="vdc1-pmine-reward">0.00000000</p>
                                        </div>
                                        {/* <div className="col-md-4">
                                            <p className="loans-page_orange-color orange-to-white" style={{marginBottom: '0px'}}>IOST</p>
                                            <p className="loans-page_orange-color orange-to-white" id="vdc1-iost-reward">0.00000000</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="loans-page_orange-color orange-to-white" style={{marginBottom: '0px'}}>PER</p>
                                            <p className="loans-page_orange-color orange-to-white" id="vdc1-per-reward">0.00000000</p>
                                        </div> */}
                                    </div>
                                    <div className="text-center">
                                      <Button className="lp-btn btn-leaf" style = {{marginBottom:'5px',}}>Compound All Rewards</Button>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-md-12 col-md-offset-3">
                                            <b className="loans-page_orange-color orange-to-white">APR for Compounding : 0.00%</b>
                                            <br/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                          </StyledPoolCard>
                        </div>
                    </div>                   
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <h2 className="loans-page_orange-color" style={{marginBottom: '0px'}}>gROOT Harvest</h2>
                            {/* <p className="loans-page_orange-color">5% PMINE Daily drip pool</p> */}
                        </div>
                    </div>

                    <div className="row text-center vdc-alert" id="statusVDC2Msg">
                    </div>

                    <div className="uniswap-container" style={{background:'transparent'}}>
                        <div className="swap">
                         <StyledPoolCard style={{height:'auto'}}>
                            <form action="" autoComplete="off">
                                <div className="containers">
                                    <div className="row text-center">
                                        <div className="col-md-4 col-sm-12">
                                            <input type="number" placeholder="0.0" id="vdc2-deposit-amount" />
                                            <br/>
                                            {/* <div align-center="center" style={{marginTop: '10px'}}>
                                                <a href="javascript:void(0);" className="rocket-button gold-rocket-button"
                                                  id="vdc2-deposit-btn">
                                                      
                                                    <div className="default">Deposit</div>
                                                </a>
                                            </div> */}
                                            <Button className="lp-btn" style={{marginTop: '10px'}} variant="outline-info" >Deposit</Button>
                                        </div>

                                        <div className="col-md-4 col-sm-12">
                                            <img src={vdcVolatile} alt="profile" style={{height:'70px', marginTop:'5px'}}/>
                                        </div>

                                        <div className="col-md-4 col-sm-12">
                                            <input type="number" placeholder="0.0" id="vdc2-withdraw-amount"/>
                                            <br />
                                            {/* <div align-center="center" style={{marginTop: '10px'}}>
                                                <a href="javascript:void(0);" className="rocket-button gold-rocket-button"
                                                  id="vdc2-withdraw-btn">
                                                    <div className="default">Withdraw</div>
                                                </a>
                                            </div> */}
                                            <Button className="lp-btn btn-leaf" style={{marginTop: '10px'}} >Withdraw</Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="row text-center">
                                    <div className="col-md-12 col-md-offset-3">
                                        <b className="loans-page_orange-color orange-to-white">YOUR HOLDINGS</b>
                                        <br/>
                                    </div>
                                </div>

                                <div className="row text-center">
                                    <div className="col-md-12 col-md-offset-3" id="pmine-holdings-1">
                                        <p className="loans-page_orange-color orange-to-white"><span
                                                    id="vdc1-holding-pmine">0.00000000</span> gROOT($0.00)</p>
                                    </div>
                                </div>

                                <div align-center="center">
                                    {/* <a href="javascript:void(0);" className="rocket-button gold-rocket-button"
                                      id="vdc2-claim-btn">
                                        <div className="default">CLAIM REWARDS</div>
                                    </a> */}
                                    <Button className="lp-btn" variant="outline-info" >Claim Rewards </Button>
                                  
                                    <div className="row text-center">
                                        <div className="col-md-12 col-md-offset-3">
                                            <b className="loans-page_orange-color orange-to-white">YOUR REWARDS</b>
                                            <br/>
                                        </div>
                                    </div>

                                    <div className="row text-center">
                                        <div className="col-md-12">
                                            <p className="loans-page_orange-color orange-to-white" style={{marginBottom: '0px'}}>BNB</p>
                                            <p className="loans-page_orange-color orange-to-white" id="vdc1-pmine-reward">0.00000000</p>
                                        </div>
                                        {/* <div className="col-md-4">
                                            <p className="loans-page_orange-color orange-to-white" style={{marginBottom: '0px'}}>IOST</p>
                                            <p className="loans-page_orange-color orange-to-white" id="vdc1-iost-reward">0.00000000</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="loans-page_orange-color orange-to-white" style={{marginBottom: '0px'}}>PER</p>
                                            <p className="loans-page_orange-color orange-to-white" id="vdc1-per-reward">0.00000000</p>
                                        </div> */}
                                    </div>
                                    <div className="text-center">
                                      <Button className="lp-btn btn-leaf" style = {{marginBottom:'5px'}} >Compound All Rewards</Button>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-md-12 col-md-offset-3">
                                            <b className="loans-page_orange-color orange-to-white">APR for Compounding : 0.00%</b>
                                            <br/>
                                        </div>
                                    </div>
                                </div>

                            </form>
                         </StyledPoolCard>
                        </div>
                    </div>
                </div>
            </div>
        <div className = "row margin-auto">
          <div className="col-xs-12 col-sm-12 col-md-4 text-center">
            <table className="table-dark richlist-table margin-auto">
              <thead>
                <tr>
                  <th scope="col" data-label="RANK">RANK</th>
                  <th scope="col" data-label="ADDRESS">ADDRESS</th>
                  <th scope="col" data-label="AMOUNT">AMOUNT</th>
                  <th scope="col" data-label="HOLDING">STAKED</th>
                </tr>
              </thead>
              <tbody id="compound-richlist-table-body">
              {
                compound.map((row, index) => (
                  <tr>
                    <td scope="col" data-label="RANK">{index}</td>
                    <td scope="col" data-label="ADDRESS">{row.address}</td>
                    <td scope="col" data-label="AMOUNT">{row.amount}</td>
                    <td scope="col" data-label="HOLDING">{row.staked}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 text-center">
            <p className="loans-page_orange-color">
              <span style={{fontSize: '1.1rem', fontWeight: 'bold'}}>GRO/gROOT STAKING fees and information</span><br/>
                GRO/gROOT staking fees are 11% in and 11% out, they are distributed in the following way:<br/>
                3% market buys gROOT<br/>
                1% Dev fee<br/>
                7% Treasury<br/>
                Receives BNB reward every block, which can be compounded
                to increase your stake of GRO/gROOT.<br/>
                THIS DECENTRALIZED APPLICATION HAS BEEN MADE
                FOR ENTERTAINMENT PURPOSES AND IS A GAME, NOT
                AN INVESTMENT PLATFORM. NO GUARANTEES OR
                WARRANTIES ARE ISSUED TO ANY PARTICIPANTS.
                PLEASE DO NOT PARTICIPATE IN THIS GAME IF IT IS NOT
                LEGAL TO DO SO IN YOUR PARTICULAR LOCALITY.</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 text-center">
            <table className="table-dark richlist-table margin-auto">
              <thead>
                <tr>
                  <th scope="col" data-label="RANK">RANK</th>
                  <th scope="col" data-label="ADDRESS">ADDRESS</th>
                  <th scope="col" data-label="AMOUNT">AMOUNT</th>
                  <th scope="col" data-label="HOLDING">STAKED</th>
                </tr>
              </thead>
              <tbody id="volatile-richlist-table-body">
              {
                volatile.map((row, index) => (
                  <tr>
                    <td scope="col" data-label="RANK">{index}</td>
                    <td scope="col" data-label="ADDRESS">{row.address}</td>
                    <td scope="col" data-label="AMOUNT">{row.amount}</td>
                    <td scope="col" data-label="HOLDING">{row.staked}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
            </div>
        </div>
      </div>

      <GlobalStyle />
    </div>
  );
}

export default GrootUiYield;
