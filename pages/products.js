import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Base from '../components/Base';
import Hero from '../components/Hero';
import ProductCards from '../components/ProductCards';
import fetch from 'isomorphic-fetch';
import Footer from '../components/Footer';

class products extends Component {
  static async getInitialProps({ req }) {
    const res = await fetch('https://api.myjson.com/bins/1c58pg');
    const data = await res.json();
    return { data }
  }

  render() {
    const {
      product1,
      product2,
      product3
    } = this.props.data;
    return (
      <Base phoneNumber={this.props.phoneNumber}>
        <Hero
          price=""
          frequencyText=""
          legal=""
          title="Pick a product."
          subtitle="Get all of the products you've ever wanted, you just have to pay for them with money."
          buttonText="see products"
          backgroundImg="../static/hero/hero-landing.jpg"
        />
        <ProductCards
          products={[product1, product2, product3]}
        />
        <Footer />
      </Base>
    );
  }
}

products.propTypes = {

};

export default products;