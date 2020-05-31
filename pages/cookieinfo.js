import Head from "next/head";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Card from "../components/Card";
import Katamari from "../assets/compressed/Katamari.png";
import TwitterLogo from "../assets/compressed/twitter.png";
import SMS from "../assets/compressed/supermarketsolid.png";
import DurhamDrive from "../assets/compressed/DurhamDrivesquare.png";
import Footer from "../components/Footer";
import EmailSignUp from "../components/EmailSignUp";

const GlobalStyle = createGlobalStyle`
  html, 
    body {
    padding: 0;
    margin: 0;
    font-family: Helvetica, sans-serif;
    }
    body, #__next, .container{
      min-height: 100vh;
    }

    .container {
      display: flex;
      flex-direction: column;
    }

    * {
    box-sizing: border-box;
    }


`;

const PageContainer = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 0 1em;
`;

const CardContainer = styled.div`
  display: grid;
  grid-gap: 1em;

  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 35rem) {
    grid-template-columns: 1fr;
  }
}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TwitterLink = styled.img`
  width: 2em;
`;

const MainText = styled.div`
  max-width: 30rem;
  margin: 0 auto;
  line-height: 1.5rem;
`;

const TitleLink = styled.a`
  color: black;
  text-decoration: none;

  &:visited {
    color: black;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

const Home = () => (
  <div className="container">
    <Head>
      <title>Joe Hart Dot Fun</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyle whiteColor />

    <main>
      <PageContainer>
        <Header>
          <h1>
            <TitleLink href="/">joehartdotfun</TitleLink>
          </h1>
          <a href="https://twitter.com/joehart">
            <TwitterLink src={TwitterLogo} alt="Twitter Profile" />
          </a>
        </Header>
        <MainText>
          <h2>Cookie Info</h2>
          <p>
            I use cookies on this site to track which games are doing well,
            which games aren't etc. As well as seeing which links people press
            on the site.
          </p>
          <p>
            It's just a standard Google Analytics implementation, nothing fancy.
          </p>
          <p>
            I hope that's ok with you but totally understand if it's not. If
            you're keen to block analytics here and indeed many other websites I
            highly recommend{" "}
            <a href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm">
              Ublock Origin
            </a>{" "}
            or switching to a privacy focused browser like{" "}
            <a href="https://brave.com/">Brave</a> or{" "}
            <a href="https://www.mozilla.org/en-GB/firefox/new/">Firefox</a>.{" "}
          </p>
        </MainText>
      </PageContainer>
    </main>
    <Footer />
  </div>
);

export default Home;
