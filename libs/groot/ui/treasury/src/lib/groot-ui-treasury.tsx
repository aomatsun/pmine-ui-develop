import React from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';
/* eslint-disable-next-line */
export interface GrootUiTreasuryProps {}

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const StyledGrootUiTreasury = styled.div`
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

export function GrootUiTreasury(props: GrootUiTreasuryProps) {
  return (
    <StyledGrootUiTreasury>
      <Modal.Dialog className="dialog" >
        <Modal.Header >
          <Modal.Title>Coming Soon</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>This feature is still under development and is currently unavailable.  Please connect with us on telegram to stay updated.</p>
        </Modal.Body>


      </Modal.Dialog>


      <div className="treasury-table">
        <div className="row treasury-values">
          <div className="col-md-2">
            0.00 gROOT
          </div>
          <div className="col-md-2">
            $ 0.00
          </div>
          <div className="col-md-2">
            0 %
          </div>
          <div className="col-md-2">
            $ 0.00
          </div>
          <div className="col-md-2">
            $ 0.00
          </div>
          <div className="col-md-2">
            0
          </div>
        </div>

        <div className="row treasury-labels">
          <div className="col-md-2">
            Current Price Swap
          </div>
          <div className="col-md-2">
            gROOT Price
          </div>
          <div className="col-md-2">
            Total Supply
          </div>
          <div className="col-md-2">
            Marketcap
          </div>
          <div className="col-md-2">
            Treasury Value
          </div>
          <div className="col-md-2">
            Treasury Ratio
          </div>
        </div>
      </div>
      <hr/>
      <ResponsiveContainer width="99%" aspect={2}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" hide/>
        <YAxis hide/>

        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="gold"
          fill="gold"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="#17a2b8"
          fill="#17a2b8"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stackId="1"
          stroke="purple"
          fill="purple"
        />
      </AreaChart>
      </ResponsiveContainer>
    </StyledGrootUiTreasury>
  );
}

export default GrootUiTreasury;
