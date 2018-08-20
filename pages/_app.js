import App, {Container} from 'next/app';
import React from 'react';

export default class POCApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    const res = await fetch('https://api.myjson.com/bins/1c58pg');
    const data = await res.json();
    console.log(data.PhoneNumber);

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {pageProps, phoneNumber: data.PhoneNumber}
  }

  render() {
    const {Component, pageProps, phoneNumber} = this.props;
    return (
      <Container>
        <Component {...pageProps} phoneNumber={phoneNumber} />
      </Container>
    )
  }
}