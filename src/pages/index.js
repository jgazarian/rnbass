import * as React from "react";
import * as styles from "./styles.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <main className={styles.realHero}>
      <div>
        <StaticImage
          className={styles.logo}
          src={`../images/rnbass-logo-black.png`}
          alt="the rnbass logo"
          placeholder="blurred"
        />
        {/* <a
          style={{ color: "#f8f8f8" }}
          href="https://buy.stripe.com/test_6oE2939ZV0lpfbGaEE"
        >
          Buy Social Media Promotion
        </a> */}
        {/* <form method="POST" action="/api/checkout">
          <button style={buttonStyles} type="submit">
            PURCHASE
          </button>
        </form> */}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <>
      <title>RnBass</title>
      <meta name="title" content="RnBass" />
      <meta name="description" content="rnbass.com" />
    </>
  );
};
