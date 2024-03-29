import React, { useEffect, useState } from "react";
import * as styles from "./styles.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const PREFERS_DARK_MEDIA = "(prefers-color-scheme: dark)";

const IndexPage = () => {
  const [isDark, setIsDark] = useState(false);

  function changeEventListener(event) {
    setIsDark(event.matches);
  }

  useEffect(() => {
    window
      .matchMedia(PREFERS_DARK_MEDIA)
      .addEventListener("change", changeEventListener);

    setIsDark(window.matchMedia(PREFERS_DARK_MEDIA).matches);

    return () =>
      window
        .matchMedia(PREFERS_DARK_MEDIA)
        .removeEventListener("change", changeEventListener);
  }, []);

  return (
    <main className={styles.hero}>
      {isDark ? (
        <StaticImage
          className={styles.logo}
          src={`../images/rnbass-logo-white.png`}
          alt="the rnbass logo"
          placeholder="blurred"
        />
      ) : (
        <StaticImage
          src={`../images/rnbass-logo-black.png`}
          className={styles.logo}
          alt="the rnbass logo"
          placeholder="blurred"
        />
      )}
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
