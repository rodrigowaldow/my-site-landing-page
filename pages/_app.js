import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import React from 'react'
import NextSeo from 'next-seo'

const DEFAULT_SEO = {
  title: 'Rodrigo Waldow Developer',
  description: 'Rodrigo Waldow - Software developer from RS, Brazil',
  openGraph: {
    type: 'website',
    locale: 'pt_br',
    url: 'https://www.rodrigowaldow.com.br',
    title: 'Rodrigo Waldow Developer',
    description: 'Rodrigo Waldow - Software developer from RS, Brazil',
    image:
      'https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg',
    site_name: 'RodrigoWaldow.com.br',
    imageWidth: 1200,
    imageHeight: 1200
  }
};

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <NextSeo config={DEFAULT_SEO} />
        <PageTransition timeout={200} classNames="page-transition">
          <Component {...pageProps} />
        </PageTransition>

        <style global jsx>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 200ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 200ms;
          }
        `}</style>
      </Container>
    )
  }
}
