import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import styled from 'styled-components';
import {font} from './Styles';

const NavContainer = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  background-color: #000;
`

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`

const Logo = styled.h1`
  ${font(28, 500)}
  color: #fff;
`

const LinkStyle = styled.a`
  text-decoration: none;
  color: #fff;
  ${font(16, 200)}
  margin: 10px 20px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`

const Button = styled.button`
  ${font(14, 300)}
  text-transform: uppercase;
  color: #fff;
  background-color: #6c63ff;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px 50px;
  margin: 0;
`

const CallNow = styled.div`

  p {
    ${font(14, 200)}
    color: #fff;
    margin: 0;
  }
`

const Phone = styled.h3`
  margin: 0;
  color: #6c63ff;
  ${font(24, 200)}
`

class Nav extends Component {
  render() {
    return (
      <NavContainer>
        <NavContent>
          <Logo>Logo Image</Logo>
          <NavList>
            <Link prefetch href="/">
              <LinkStyle>Home</LinkStyle>
            </Link>
            <Link prefetch href="/products">
              <LinkStyle>Products</LinkStyle>
            </Link>
            <Link href="/#">
              <LinkStyle>Link</LinkStyle>
            </Link>
            <Link href="/#">
              <LinkStyle>Link</LinkStyle>
            </Link>
            <Link href="/#">
              <LinkStyle>Link</LinkStyle>
            </Link>
          </NavList>
          <Button>order now</Button>
          <CallNow>
            <p>Call Now We're Open</p>
            <Phone>{this.props.phoneNumber}</Phone>
          </CallNow>
        </NavContent>
      </NavContainer>
    );
  }
}

Nav.propTypes = {

};

export default Nav;