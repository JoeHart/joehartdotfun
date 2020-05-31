import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";

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
      <html>
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
        </body>
      </html>
    );
  }
}
