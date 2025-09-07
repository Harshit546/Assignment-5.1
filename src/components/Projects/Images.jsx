import React from "react";
import PropTypes from "prop-types";
import styles from "./Images.module.scss";

const Images = ({ src, alt }) => (
  <div className={styles["project-image"]}>
    <img src={src} alt={alt} />
  </div>
);

Images.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Images;
