import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";
import {
  Cookies,
  CookiesProvider,
  CookieBannerUniversal,
} from "react-cookie-banner";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }
  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}

          <meta property="og:title" content="joehartdotfun - Silly Games" />
          <meta
            name="description"
            content="Funny, silly or satirical comedy games made by comedian and coder Joe Hart"
          />
          <meta
            property="og:description"
            content="Funny, silly or satirical comedy games made by comedian and coder Joe Hart"
          />
          <meta property="og:image" content="https://joehart.fun/me.jpg" />
          <meta property="og:url" content="https://joehart.fun" />
          <meta name="twitter:card" content="summary_large_image" />

          <meta property="og:site_name" content="joehartdotfun" />

          <meta name="twitter:site" content="@joehart" />
          <meta name="twitter:creator" content="@joehart" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            id="cookiebanner"
            data-position="top"
            data-bg="rgba(0,0,0,0.8)"
            data-accept-on-scroll="true"
            data-close-text="Dismiss"
            data-debug="true"
            data-moreinfo="/cookieinfo"
            data-message="I use cookies to see which games are played most to try and make them better. I assume you're cool with that if you're hanging about."
            src="https://cdn.jsdelivr.net/gh/dobarkod/cookie-banner@1.2.2/dist/cookiebanner.min.js"
          ></script>
        </body>
      </html>
    );
  }
}
