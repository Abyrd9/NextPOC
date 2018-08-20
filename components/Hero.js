import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {font} from './Styles';

const HeroContainer = styled.div`
  width: 100%;
  /* background-color: #333333; */
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 1200px;
  background: ${props => {
    return `
    url(${props.backgroundImg})
    `
  }};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 180%;
  padding: 50px 0px;
`

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 600px;
  h1 {
    ${font(60, 300)}
    margin: 0;
    color: #fff;
  }
  h3 {
    ${font(24, 400)}
    margin: 0;
    color: #fff;
    margin-top: 5px;
  }
`

const FrequencyText = styled.span`
  ${font(10, 300)}
  display: inline-block;
  width: 40px;
  margin-left: 5px;
`

const Price = styled.p`
  ${font(60, 300)}
  margin: 10px 0px;
  color: #fff;
  position: relative;
  margin-left: 12px;
  ${props => {
    if (props.price.length !== 0) {
      return `
      &:before {
        content: '$';
        font-size: 18px;
        position: absolute;
        left: -12px;
        top: 5px;
      }
      `
    }
  }}
`

const Legal = styled.p`
  margin: 0;
  ${font(10, 200)}
  color: #fff;
  margin: 10px 0px;
`

const Button = styled.button`
  ${font(14, 300)}
  text-transform: uppercase;
  color: #fff;
  background-color: #6c63ff;
  border: none;
  border-radius: 5px;
  padding: 12px 25px;
  max-width: 220px;
  margin-top: 10px;
`

class Hero extends Component {
  render() {
    const {
      price,
      frequencyText,
      legal,
      title,
      subtitle,
      buttonText,
      backgroundImg
    } = this.props;
    return (
      <HeroContainer>
        <Content backgroundImg={backgroundImg} >
          <ContentBlock>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <Price price={price}>
              {price}
              <FrequencyText>{frequencyText}</FrequencyText>
            </Price>
            <Legal>{legal}</Legal>
            <Button>{buttonText}</Button>
          </ContentBlock>
        </Content>
      </HeroContainer>
    );
  }
}

Hero.propTypes = {
  price: PropTypes.number,
  frequencyText: PropTypes.string,
  legal: PropTypes.string,
};

export default Hero;