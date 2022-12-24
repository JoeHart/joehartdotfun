import React from "react";
import styled from "styled-components";
import Item from "../components/Item";
import Me from "../assets/compressed/me-tiny.jpg";
import Link from "next/link";
const Container = styled.footer`
  min-height: 15em;

  margin-top: auto;
  margin-bottom: 0;
`;

const InnerContainer = styled.div`
  background-color: #222;
  color: #eee;
  margin: 0 auto;
  margin-top: 3em;
  padding: 2rem;
`;

const Columns = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 35rem) {
    grid-template-columns: 1fr;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-weight: 300;
  font-size: 1rem;
  & > li + li {
    margin-top: 0.5em;
  }
  a,
  a:visited {
    color: #5cadff;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;
export default function Footer() {
  return (
    <Container>
      <InnerContainer>
        <Columns>
          <div>
            <h3>About Me</h3>
            <Item
              avatar={Me}
              name="Joe Hart"
              description="Comedian & Coder"
              link="https://www.joehart.co.uk"
            />
            <p>Hey there 👋 I'm Joe this is where I put silly game's I make.</p>
            <p>
              If you like them follow me on socials to hear about new ones, or
              sign up to my mailing list.
            </p>
          </div>
          <div>
            <h3>Links</h3>
            <LinkList>
            <li><a href="https://social.lol/@joehart">Mastodon</a></li>
              <li>
                <a href="https://twitter.com/joehart">Twitter</a>
              </li>
              <li>
                <a href="https://github.com/JoeHart">GitHub</a>
              </li>
              <li>
                <a href="https://www.instagram.com/joehart42/">Instagram</a>
              </li>
              <li>
                <a href="https://joehart.dev">Blog</a>
              </li>
              <li>
                <a href="https://joehartfun.itch.io/">Itch.io</a>
              </li>
              <li>
                <a href="https://www.buymeacoffee.com/8Prw3qhYE">
                  Buy My A Coffee
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UC7Q5oFp0U3eWWXMq7x1iAEQ">
                  Youtube
                </a>
              </li>
            </LinkList>
          </div>
          <div>
            <h3>Important Stuff</h3>
            <LinkList>
              <li>
                <Link href="/cookieinfo">
                  <a>Cookie Stuff</a>
                </Link>
              </li>
            </LinkList>
          </div>
        </Columns>
      </InnerContainer>
    </Container>
  );
}
