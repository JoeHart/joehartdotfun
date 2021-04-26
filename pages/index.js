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
import { usePlausible } from "next-plausible";
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

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

const Home = () => {
  const plausible = usePlausible();
  return (
    <div className="container">
      <Head>
        <title>Joe Hart Dot Fun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle whiteColor />

      <main>
        <PageContainer>
          <Header>
            <h1>joehartdotfun</h1>
            <a href="https://twitter.com/joehart">
              <TwitterLink src={TwitterLogo} alt="Twitter Profile" />
            </a>
          </Header>

          <CardContainer>
            <Card
              title="Durham Drive"
              image={DurhamDrive}
              buttonText="Play On Itch.io"
              link="https://joehartfun.itch.io/durham-drive"
            >
              <p>
                It's COVID19, so for some reason we're going to durham. Dodge
                the police and get to the castle.
              </p>
            </Card>
            <Card
              title="Super Market Solid"
              image={SMS}
              link="/play/supermarketsolid/"
            >
              <p>
                It's time to go to the shops, can you get the items, get to the
                checkout and maintain social distancing?
              </p>
            </Card>
            <Card
              title="Katamari Node Modules"
              image={Katamari}
              link="/play/katamari/"
            >
              <p>
                Fulfill your destiny as a node_modules folder and grow as big as
                you can.
              </p>
            </Card>
            <EmailSignUp />
          </CardContainer>
        </PageContainer>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
