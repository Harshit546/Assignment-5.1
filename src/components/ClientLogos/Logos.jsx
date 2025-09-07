import React from "react";
import PropTypes from "prop-types";
import styles from "./Logos.module.scss";

const Logos = ({ src, variant }) => (
  <div
    className={`${styles["client-logo"]} ${
      variant === "large"
        ? styles["client-logo--large"]
        : styles["client-logo--small"]
    }`}
  >
    <img src={src} alt="Client Logo" />
  </div>
);

Logos.propTypes = {
  src: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["small", "large"]),
};

Logos.defaultProps = {
  variant: "small",
};

export default Logos;
