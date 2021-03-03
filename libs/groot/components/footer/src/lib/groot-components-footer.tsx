import React from 'react';

import styled from 'styled-components';
import { Twitter, Telegram } from 'react-bootstrap-icons';

/* eslint-disable-next-line */
export interface GrootComponentsFooterProps {}

const StyledGrootComponentsFooter = styled.div`
  color: gray;
  > hr {
    width: 100%;
    border-color: gray;
    border-width: 1px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 20px;
  }

  > .row .r-column {
    text-align: right;

  }
  > .row .r-column a {
    padding: 10px;

  }

  > .row .r-column a img {
    filter: grayscale(100%);

  }
`;

export function GrootComponentsFooter(props: GrootComponentsFooterProps) {
  return (
    <StyledGrootComponentsFooter>
      <hr/>
      <div className="row">
        <div className="col-md-6 l-column">
         &#169; Copyright Growth Foundation. 2021
        </div>
        <div className="col-md-6 r-column">
          <a href="https://twitter.com/growthdefi"><Twitter color="gray" size={25}/></a>
          <a href="https://t.me/growthdefi"><Telegram color="gray" size={25}/></a>
          <a href="https://growthdefi.com/"><img src={require('../assets/images/gro_transparency.png')} alt="gro_logo" height="25px" /></a>
        </div>
      </div>
    </StyledGrootComponentsFooter>
  );
}

export default GrootComponentsFooter;
