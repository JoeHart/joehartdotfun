import Router from "next/router";
import withGA from "next-ga";
import PlausibleProvider from "next-plausible";
function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="joehart.fun" trackOutboundLinks={true}>
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default withGA("UA-3930754-18", Router)(MyApp);
