import Head from "next/head";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Card from "../components/Card";
import Katamari from "../assets/Katamari.png";
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
`;

const CardContainer = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Title = styled.div``;
const Home = () => (
  <div className="container">
    <Head>
      <title>Joe Hart Dot Fun</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyle whiteColor />

    <main>
      <PageContainer>
        <h1>joehartdotfun</h1>
        <CardContainer>
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
