import Head from "next/head";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Card from "../components/Card";
import Katamari from "../assets/Katamari.png";
import Me from "../assets/me.jpg";
import TwitterLogo from "../assets/twitter.png";
import SMS from "../assets/supermarketsolid.png";
import DurhamDrive from "../assets/DurhamDrive.png";
import Item from "../components/Item";
const GlobalStyle = createGlobalStyle`
  html, 
    body {
    padding: 0;
    margin: 0;
    font-family: Helvetica, sans-serif;
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
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TwitterLink = styled.img`
  width: 2em;
`;
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
          <h1>joehartdotfun</h1>
          <a href="https://twitter.com/joehart">
            <TwitterLink src={TwitterLogo} alt="Twitter Profile" />
          </a>
        </Header>
        <Item
          avatar={Me}
          name="Joe Hart"
          description="Comedian & Coder"
          link="https://www.joehart.co.uk"
        />
        <CardContainer>
          <Card
            title="Durham Drive"
            image={DurhamDrive}
            link="/play/durhamdrive/index.html"
          >
            <p>
              It's COVID19, so for some reason we're going to durham. Dodge the
              police and get to the castle.
            </p>
          </Card>
          <Card
            title="Super Market Solid"
            image={SMS}
            link="/play/supermarketsolid/index.html"
          >
            <p>
              It's time to go to the shops, can you get the items, get to the
              checkout and maintain social distancing?
            </p>
          </Card>
          <Card
            title="Katamari Node Modules"
            image={Katamari}
            link="/play/katamari/index.html"
          >
            <p>
              Fulfill your destiny as a node_modules folder and grow as big as
              you can.
            </p>
          </Card>
        </CardContainer>
      </PageContainer>
    </main>
  </div>
);

export default Home;
