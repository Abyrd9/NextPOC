import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Base from '../components/Base';
import Hero from '../components/Hero';
import {injectGlobal} from 'styled-components';
import FeatureSection from '../components/FeatureSection';
import Footer from '../components/Footer';


injectGlobal`
  body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  p {
    margin: 0;
  }
`

class index extends Component {
  static async getInitialProps({ req }) {
    const res = await fetch('https://api.myjson.com/bins/1c58pg');
    const data = await res.json();
    return { data }
  }

  render() {
    const {
      product1
    } = this.props.data;
    return (
      <Base phoneNumber={this.props.phoneNumber}>
        <Hero
          price={product1.price}
          frequencyText={product1.frequencyText}
          legal={product1.legal}
          title="This is the Title"
          subtitle="This is the subtext that will say some crazy thing and help sell more things."
          buttonText="view packages"
          backgroundImg="../static/hero/hero-westworld.png"
        />
        <FeatureSection />
        <Footer />
      </Base>
    );
  }
}

export default index;