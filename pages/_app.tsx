import App, {Container} from 'next/app'
import React from 'react';

export default class MyApp extends App {

  constructor(props) {
    super(props);
  }

  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return <Container>
      <div>Some Navigation</div>
      <Component {...pageProps} />
    </Container>
  }
}