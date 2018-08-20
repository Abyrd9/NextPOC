import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {font} from './Styles';
import ProductCard from './ProductCard';

const ProductSectionContainer = styled.div`
  padding: 60px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F2F2F2;
`

const ProductTitle = styled.h2`
  text-align: center;
  ${font(48, 200)}
  margin: 0;
  margin-bottom: 10px;
  color: #6c63ff;
`

const ProductSubtitle = styled.p`
  text-align : center;
  ${font(16, 200)}
  margin: 10px;
`

const Productlegal = styled.p`
  text-align: center;
  ${font(10, 200)}
`

const ProductContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 60px;
`

class ProductCards extends Component {
  render() {
    return (
      <ProductSectionContainer>
        <ProductTitle>Pick the Product You Want</ProductTitle>
        <ProductSubtitle>These are some really great products and we've got a couple of cards you can look through to see these products and how great they are. <br /> You should buy every product and then tell everyone about the products you bought.</ProductSubtitle>
        <ProductContent>
          {this.props.products.map(product => (
            <ProductCard
              title={product.title}
              firstButtonText="more info"
              features={product.features}
              description={product.description}
              price={product.price}
              frequencyText={product.frequencyText}
              legal={product.legal}
              secondButtonText="order now"
            />
          ))}
        </ProductContent>
      </ProductSectionContainer>
    );
  }
}

ProductCards.propTypes = {

};

export default ProductCards;