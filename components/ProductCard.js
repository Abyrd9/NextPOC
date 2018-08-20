import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {font} from './Styles';

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 20px;
  max-width: 600px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  position: relative;
  span:nth-child(1) {
    position: absolute;
    content: '';
    height: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    top: 0;
    left: 0;
    ${props => {
      switch(props.title) {
        case "Product One":
        return 'background-color: #41B8BA;'
        break;
        case "Product Two":
        return 'background-color: #FF6F59;'
        break;
        case "Product Three":
        return 'background-color: #06D6A0;'
        break;
        default:
        return 'background-color: #354546;'
      }
    }}
  }
`

const ProductTitle = styled.div`
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
  h3 {
    margin: 0;
    margin-bottom: 10px;
    ${font(32, 300)}
  }
  button {
    ${font(14, 300)}
    text-transform: uppercase;
    color: #fff;
    background-color: #6c63ff;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px 50px;
  }
`

const ProductList = styled.div`
  padding: 10px 20px;
  border-bottom: solid 2px #F2F2F2;
  h2 {
    margin: 0;
    ${font(18, 500)}
  }
  ul {
    list-style: none;
    margin-top: 5px;
    padding: 0;
  }
  li {
    margin-left: 10px;
    padding: 5px 0px;
    ${font(14, 300)}
  }
  p {
    ${font(16, 200)}
  }
`

const ProductPrice = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p:nth-child(1) {
    ${font(60, 500)}
    margin: 10px 0px;
    color: #6c63ff;
    position: relative;
    margin-left: 12px;
    &:before {
      content: '$';
      font-size: 18px;
      position: absolute;
      left: -12px;
      top: 5px;
    }
    span {
      ${font(10, 300)}
      display: inline-block;
      width: 40px;
      margin-left: 5px;
      position: relative;
      background-color: transparent;
    }
  }
  p:nth-child(2) {
    ${font(10, 200)}
  }
`

const ProductButton = styled.div`
  background-color: #F2F2F2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  button {
    ${font(14, 300)}
    text-transform: uppercase;
    color: #fff;
    background-color: #FA824C;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px 50px;
  }
`

class ProductCard extends Component {
  render() {
    const {
      title,
      firstButtonText,
      features,
      description,
      price,
      frequencyText,
      legal,
      secondButtonText,
    } = this.props;

    return (
      <ProductCardContainer title={title}>
        <span></span>
        <ProductTitle>
          <h3>{title}</h3>
          <button>{firstButtonText}</button>
        </ProductTitle>
        <ProductList>
          <h2>Features:</h2>
          <ul>
            {features.map(feature => (
              <li>{feature}</li>
            ))}
          </ul>
          <p>{description}</p>
        </ProductList>
        <ProductPrice>
          <p>{price}<span>{frequencyText}</span></p>
          <p>{legal}</p>
        </ProductPrice>
        <ProductButton>
          <button>{secondButtonText}</button>
        </ProductButton>
      </ProductCardContainer>
    );
  }
}

ProductCard.propTypes = {

};

export default ProductCard;