import * as React from "react";
import * as styles from "./styles.module.scss";
import { StaticImage } from "gatsby-plugin-image";
// import Logo from "../images/rnbass-logo-black.png";

// const buttonStyles = {
//   padding: "1rem 3rem",
//   borderRadius: 4,
//   fontSize: "1.25rem",
//   color: "#efefef",

//   letterSpacing: 1.5,
//   textTransform: "uppercase",
//   cursor: "pointer",
//   background: "linear-gradient(35deg, #111111, firebrick)",
//   border: "1px solid firebrick"
// };

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

export const Head = () => <title>Home Page</title>;
