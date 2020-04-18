import Head from "next/head";
import EurovisionLogo from "../components/EurovisionLogo";
const Home = () => (
  <div className="container">
    <Head>
      <title>Alisa and Joe's Eurovision</title>
      <meta property="og:title" content="Alisa and Joe's Eurovision" />
      <meta
        property="og:description"
        content="7pm Saturday 18th of April Eurovision 2020 live streamed, you decide who wins!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <meta
        property="og:image"
        itemprop="image"
        content="http://joehart.fun/smallsplash.jpg"
      />
      <meta
        property="og:image:secure_url"
        itemprop="image"
        content="https://joehart.fun/Splash.png"
      />

      <meta
        name="description"
        content="7pm Saturday 18th of April Eurovision 2020 live streamed, you decide who wins!"
      />

      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="stylesheet" href="https://use.typekit.net/rdi3nga.css"></link>
    </Head>

    <main>
      <div className="container">
        <div className="header">
          <p className="names">Alisa and Joe's</p>
          <EurovisionLogo width="15vh" />
        </div>
        <div>
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/watch?v=8dtNRhr0Bro"
          ></iframe>
        </div>
        <p>Show starts at 7pm sharp!</p>
        <a
          className="button"
          href="https://forms.gle/fjaEdNd1WxvHf3P96"
          target="_blank"
        >
          Vote Here
        </a>
        <div className="footer">
          <div>
            Hey, normally you'd spend £1 or £2 ringing up and voting for
            eurovision, if you feel like it why not donate the same amount to
            NHS Charities here?{" "}
          </div>
          <div>
            <a
              className="button"
              href="https://uk.virginmoneygiving.com/JoeHart5"
              target="_blank"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </main>

    <style jsx>{`
      .container {
        min-height: 100vh;
        min-height: -webkit-fill-available;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      svg {
        width: 100%;
        height: auto;
      }

      .names {
        font-family: Pacifico;
        margin: 0;
      }

      .header {
        font-size: 12px;
        position: absolute;
        top: 0;
        text-align: center;
        margin: 16px;
      }

      .button {
        background: rgb(20, 200, 90);
        border: none;
        border-radius: 0.5em;
        font-size: 1em;
        color: white;
        padding: 0.75em;
        font-weight: 400;
        text-transform: uppercase;
        font-family: "Varela Round", sans-serif;
        box-shadow: 0 0.4em 0px 0px rgb(10, 160, 70);
        cursor: pointer;
      }

      .button:hover {
        transform: translateY(0.05em);
        background-color: rgb(25, 205, 95);
        box-shadow: 0 0.35em 0px 0px rgb(10, 160, 70);
      }

      .button:active {
        transform: translateY(0.25em);
        box-shadow: 0 0.15em 0px 0px rgb(10, 160, 70);
      }

      main {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .footer {
        font-size: 16px;
        position: absolute;
        bottom: 0;
        padding: 16px;
        max-width: 800px;
        display: flex;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        color: white;
        background: rgb(78, 16, 255);
        background: linear-gradient(
          45deg,
          rgba(48, 33, 125, 1) 0%,
          rgba(21, 111, 213, 1) 100%
        );
        font-family: sofia-pro, sans-serif;
      }

      html {
        font-size: 32px;
      }
      @media screen and (min-width: 320px) {
        html {
          font-size: calc(16px + 6 * ((100vw - 320px) / 680));
        }
      }
      @media screen and (min-width: 1000px) {
        html {
          font-size: 32px;
        }
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
