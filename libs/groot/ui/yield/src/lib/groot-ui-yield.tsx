import React from 'react';
import { Modal } from 'react-bootstrap';
import { Header } from '@groot/groot/components/header';

import styled from 'styled-components';
import GlobalStyle from '../../assets/yield-styles';


import '../assets/stylesheets/block-library-style.min.css';
import '../assets/stylesheets/contact-form-styless.css';
import '../assets/stylesheets/dashicons.min.css';
// import '../assets/stylesheets/bootstrap/bootstrap.min.css';
import '../assets/stylesheets/animate.min.css';
import '../assets/stylesheets/magnific-popup/magnific-popup.css';
import '../assets/stylesheets/font-awesome/css/font-awesome.min.css';
import "../assets/stylesheets/custom.css";

import vdcCompound from "../assets/img/vdc-compound.png";
import vdcVolatile from "../assets/img/vdc-volatile.png";
/* eslint-disable-next-line */
export interface GrootUiYieldProps {
  onToggle: () => void,
  address: string, 
}

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

const StyledGrootBoot = styled.div`
  @media (min-width:992px){.navbar{border-radius:4px}}@media (min-width:992px){.navbar-header{float:left}}.navbar-collapse{overflow-x:visible;padding-right:15px;padding-left:15px;border-top:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,0.1);box-shadow:inset 0 1px 0 rgba(255,255,255,0.1);-webkit-overflow-scrolling:touch}.navbar-collapse.in{overflow-y:auto}@media (min-width:992px){.navbar-collapse{width:auto;border-top:0;-webkit-box-shadow:none;box-shadow:none}.navbar-collapse.collapse{display:block !important;visibility:visible !important;height:auto !important;padding-bottom:0;overflow:visible !important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{padding-left:0;padding-right:0}}.navbar-fixed-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{max-height:340px}@media (max-device-width:480px) and (orientation:landscape){.navbar-fixed-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{max-height:200px}}.container>.navbar-header,.container-fluid>.navbar-header,.container>.navbar-collapse,.container-fluid>.navbar-collapse{margin-right:-15px;margin-left:-15px}@media (min-width:992px){.container>.navbar-header,.container-fluid>.navbar-header,.container>.navbar-collapse,.container-fluid>.navbar-collapse{margin-right:0;margin-left:0}}.navbar-static-top{z-index:1000;border-width:0 0 1px}@media (min-width:992px){.navbar-static-top{border-radius:0}}.navbar-fixed-top,.navbar-fixed-bottom{position:fixed;right:0;left:0;z-index:1030}@media (min-width:992px){.navbar-fixed-top,.navbar-fixed-bottom{border-radius:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;padding:15px 15px;font-size:18px;line-height:20px;height:50px}.navbar-brand:hover,.navbar-brand:focus{text-decoration:none}.navbar-brand>img{display:block}@media (min-width:992px){.navbar>.container .navbar-brand,.navbar>.container-fluid .navbar-brand{margin-left:-15px}}.navbar-toggle{position:relative;float:right;margin-right:15px;padding:9px 10px;margin-top:8px;margin-bottom:8px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:4px}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}@media (min-width:992px){.navbar-toggle{display:none}}.navbar-nav{margin:7.5px -15px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}@media (max-width:991px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;-webkit-box-shadow:none;box-shadow:none}.navbar-nav .open .dropdown-menu>li>a,.navbar-nav .open .dropdown-menu .dropdown-header{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:hover,.navbar-nav .open .dropdown-menu>li>a:focus{background-image:none}}@media (min-width:992px){.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:15px;padding-bottom:15px}}.navbar-form{margin-left:-15px;margin-right:-15px;padding:10px 15px;border-top:1px solid transparent;border-bottom:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.1);box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.1);margin-top:8px;margin-bottom:8px}
`;


const StyledGrootUiYield = styled.div`
  color: white;
  text-align: center;
  background: rgb(40, 37, 47);
  padding-top: 50px;
  padding-bottom: 50px;

  > hr {
    border-color: #17a2b8;
    width: 98%;
    flex: 1;
  }


  > .treasury-table .row {
    padding: 10px;
  }

  > .dialog {
    position: absolute;
    width: 50%;
    right: 25%;
    left: 25%;
    background-color: rgb(40, 37, 47);
    color: black;
    z-index: 2;
    text-align: left;
  }
`;

export function GrootUiYield(props: GrootUiYieldProps) {
  return (
    <div>
      <Header onToggle={props.onToggle} address={props.address} />
    
      <br />
      <hr />
      <br />
      <div className="Uniswap container" style={{paddingTop:'0%'}}>
        <div className="row text-center margin-auto">
                <div className="col-md-12">
                    <h1 className="componenet-title">PMINE</h1>
                    <h1 className="componenet-title">Virtual Deposit Contracts</h1>
                </div>
            </div>
            <div className="row text-center margin-auto" style={{paddingTop: '25px'}}>
                <div className="col-md-6 col-md-offset-3 vdc-balance-div margin-auto" style={{width:'25%'}}>
                <StyledGrootBoot>
                    <p className="text-white margin-bottom-zero" style={{display: 'flex',justifyContent: 'space-between'}}>IOST
                        Balance : <span id="iostBalance">0</span></p>
                    <p className="text-white margin-bottom-zero" style={{display: 'flex',justifyContent: 'space-between'}}>PMINE
                        Balance : <span id="pmineBalance">0</span></p>
                    <p className="text-white margin-bottom-zero" style={{display: 'flex',justifyContent: 'space-between'}}>PER
                        Balance : <span id="perBalance">0</span></p>
                        </StyledGrootBoot>
                </div>
            </div>
            <div className="row margin-auto">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <h2 className="loans-page_orange-color" style={{marginBottom: '0px'}}>COMPOUND</h2>
                            <p className="loans-page_orange-color">1% PMINE Daily drip pool</p>
                        </div>
                    </div>

                    <div className="row text-center vdc-alert" id="statusVDC1Msg">
                    </div>

                    <div className="uniswap-container">
                        <div className="swap">
                            <form action="" autoComplete="off">
                                <div className="containers">
                                    <div className="row text-center">
                                        <div className="col-md-4 col-sm-12">
                                            <input type="number" placeholder="0.0" id="vdc1-deposit-amount" />
                                            <br />
                                            <div align-center="center" style={{marginTop: '10px'}}>
                                                <a href="javascript:void(0);" className="rocket-button gold-rocket-button"
                                                  id="vdc1-deposit-btn">
                                                    <div className="default">Deposit</div>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-12">
                                          <img src={vdcCompound} alt="profile" style={{height:'70px', marginTop:'10px'}}/>
                                        </div>

                                        <div className="col-md-4 col-sm-12">
                                            <input type="number" placeholder="0.0" id="vdc1-withdraw-amount" />
                                            <br/>
                                            <div align-center="center" style={{marginTop: '10px'}}>
                                                <a href="javascript:void(0);" className="rocket-button gold-rocket-button"
                                                  id="vdc1-withdraw-btn">
                                                    <div className="default">Withdraw</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row text-center">
                                    <div className="col-md-12 col-md-offset-3">
                                        <b className="loans-page_orange-color">YOUR HOLDINGS</b>
                                        <br/>
                                    </div>
                                </div>

                                <div className="row text-center">
                                    <div className="col-md-12 col-md-offset-3" id="pmine-holdings-1">
                                        <p className="loans-page_orange-color"><span
                                                    id="vdc1-holding-pmine">0.00000000</span> PMINE</p>
                                    </div>
                                </div>

                                <div align-center="center">
                                    <a href="javascript:void(0);" className="rocket-button gold-rocket-button"
                                      id="vdc1-claim-btn">
                                        <div className="default">CLAIM REWARDS</div>
                                    </a>
                                  

                                    <div className="row text-center">
                                        <div className="col-md-12 col-md-offset-3">
                                            <b className="loans-page_orange-color">YOUR REWARDS</b>
                                            <br/>
                                        </div>
                                    </div>

                                    <div className="row text-center">
                                        <div className="col-md-4">
                                            <p className="loans-page_orange-color" style={{marginBottom: '0px'}}>PMINE</p>
                                            <p className="loans-page_orange-color" id="vdc1-pmine-reward">0.00000000</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="loans-page_orange-color" style={{marginBottom: '0px'}}>IOST</p>
                                            <p className="loans-page_orange-color" id="vdc1-iost-reward">0.00000000</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="loans-page_orange-color" style={{marginBottom: '0px'}}>PER</p>
                                            <p className="loans-page_orange-color" id="vdc1-per-reward">0.00000000</p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-12">
                            <p className="loans-page_orange-color">
                                <b className="loans-page_orange-color">Total PMINE In Contract : </b> <span
                                        id="totalPmineVDC1">0.00000000</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <h2 className="loans-page_orange-color" style={{marginBottom: '0px'}}>VOLATILE</h2>
                            <p className="loans-page_orange-color">5% PMINE Daily drip pool</p>
                        </div>
                    </div>

                    <div className="row text-center vdc-alert" id="statusVDC2Msg">
                    </div>

                    <div className="uniswap-container">
                        <div className="swap">
                            <form action="" autoComplete="off">
                                <div className="containers">
                                    <div className="row text-center">
                                        <div className="col-md-4 col-sm-12">
                                            <input type="number" placeholder="0.0" id="vdc2-deposit-amount" />
                                            <br/>
                                            <div align-center="center" style={{marginTop: '10px'}}>
                                                <a href="javascript:void(0);" className="rocket-button gold-rocket-button"
                                                  id="vdc2-deposit-btn">
                                                    <div className="default">Deposit</div>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-12">
                                            <img src={vdcVolatile} alt="profile" style={{height:'70px', marginTop:'10px'}}/>
                                        </div>

                                        <div className="col-md-4 col-sm-12">
                                            <input type="number" placeholder="0.0" id="vdc2-withdraw-amount"/>
                                            <br />
                                            <div align-center="center" style={{marginTop: '10px'}}>
                                                <a href="javascript:void(0);" className="rocket-button gold-rocket-button"
                                                  id="vdc2-withdraw-btn">
                                                    <div className="default">Withdraw</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row text-center">
                                    <div className="col-md-12 col-md-offset-3">
                                        <b className="loans-page_orange-color">YOUR HOLDINGS</b>
                                        <br/>
                                    </div>
                                </div>

                                <div className="row text-center">
                                    <div className="col-md-12 col-md-offset-3" id="pmine-holdings-1">
                                        <p className="loans-page_orange-color"><span
                                                    id="vdc2-holding-pmine">0.00000000</span> PMINE</p>
                                    </div>
                                </div>

                                <div align-center="center">
                                    <a href="javascript:void(0);" className="rocket-button gold-rocket-button"
                                      id="vdc2-claim-btn">
                                        <div className="default">CLAIM REWARDS</div>
                                    </a>
                                  
                                    <div className="row text-center">
                                        <div className="col-md-12 col-md-offset-3">
                                            <b className="loans-page_orange-color">YOUR REWARDS</b>
                                            <br/>
                                        </div>
                                    </div>

                                    <div className="row text-center">
                                        <div className="col-md-4">
                                            <p className="loans-page_orange-color" style={{marginBottom: '0px'}}>PMINE</p>
                                            <p className="loans-page_orange-color" id="vdc1-pmine-reward">0.00000000</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="loans-page_orange-color" style={{marginBottom: '0px'}}>IOST</p>
                                            <p className="loans-page_orange-color" id="vdc1-iost-reward">0.00000000</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="loans-page_orange-color" style={{marginBottom: '0px'}}>PER</p>
                                            <p className="loans-page_orange-color" id="vdc1-per-reward">0.00000000</p>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-12">
                            <p className="loans-page_orange-color">
                                <b className="loans-page_orange-color">Total PMINE In Contract : </b> <span
                                        id="totalPmineVDC2">0.00000000</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        <div className = "row margin-auto">
          <div className="col-xs-4 col-sm-4 col-md-3 text-center">
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
          <div className="col-xs-4 col-sm-4 col-md-6 text-center">
            <p className="loans-page_orange-color">
              <span style={{fontSize: '1.1rem', fontWeight: 'bold'}}>PMINE Virtual Deposit Contract fee's and information</span><br/>
                Compound VDC fees are 11% in and 11% out, they<br/>
                are distributed in the following way:<br/>
                8% to drip pool<br/>
                1% PMINE Bankroll<br/>
                1% Dev fee<br/>
                1% Volatile VDC<br/>
                Receives IOST and PER divs daily from PMINE staking<br/><br/>

                Volatile VDC fees are 33% in and 33% out, they are<br/>
                distributed in the following way:<br/>
                30% to drip pool<br/>
                2% PMINE Bankroll<br/>
                1% Dev fee<br/>
                Does not receive IOST and PER divs daily but does<br/>
                receive 1% of all PMINE deposited into Compound VDC<br/><br/>

                THIS DECENTRALIZED APPLICATION HAS BEEN MADE<br/>
                FOR ENTERTAINMENT PURPOSES AND IS A GAME, NOT<br/>
                AN INVESTMENT PLATFORM. NO GUARANTEES OR<br/>
                WARRANTIES ARE ISSUED TO ANY PARTICIPANTS.<br/>
                PLEASE DO NOT PARTICIPATE IN THIS GAME IF IT IS NOT<br/>
                LEGAL TO DO SO IN YOUR PARTICULAR LOCALITY.</p>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-3 text-center">
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
