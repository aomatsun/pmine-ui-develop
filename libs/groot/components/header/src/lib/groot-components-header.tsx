import React from 'react';

import styled from 'styled-components';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface HeaderProps {
  onToggle: () => void,
  address: string
}

const StyledHeader = styled.div`
  color: white;

  #navbar {
    width: 100% !important;
    padding-right: 0px !important;
    padding-left: 0px !important;

    background-color: transparent !important;
    font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
  }

`;

export function Header (props: HeaderProps) {

  const parseAddress = address => {
    const frontTail = address.substring(0, 5);
    const endTail = address.substring(address.length - 3, address.length);
    return `${frontTail}...${endTail}`;
  };

  return (
    <StyledHeader>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
        <Navbar.Brand href="#home"><img src={require('../assets/images/groot-navbar-logo.png')} alt="Groot-Nav-Logo" height="35px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Item>
              <Link to="/" className="nav-link" >Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/swap" className="nav-link" >Swap</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/liquidity" className="nav-link">Liquidity</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/farming" className="nav-link">Farming</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/treasury" className="nav-link">Treasury</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/groyield" className="nav-link">GRO Yield</Link>
            </Nav.Item>
            <Nav.Item>
              <Button variant="outline-info" onClick={props.onToggle}>{props.address ? parseAddress(props.address) : 'Connect'}</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledHeader>
  );
}

export default Header;
