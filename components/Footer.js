import React from "react";
import styled from "styled-components";
import Item from "../components/Item";
import Me from "../assets/me.jpg";

const Container = styled.footer`
  min-height: 15em;
  background-color: #333;
  color: #eee;
`;

const InnerContainer = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 1em;
`;

const Columns = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr 1fr 1fr;
`;
export default function Footer() {
  return (
    <Container>
      <InnerContainer>
        <h3>joehartdotfun</h3>
        <Columns>
          <div>
            <Item
              avatar={Me}
              name="Joe Hart"
              description="Comedian & Coder"
              link="https://www.joehart.co.uk"
            />
            <p>Hey there 👋 I'm Joe this is where I put silly game's I make.</p>
          </div>
          <div></div>
          <div></div>
        </Columns>
      </InnerContainer>
    </Container>
  );
}
