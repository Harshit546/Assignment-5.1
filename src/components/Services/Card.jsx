import React from "react";
import styles from "./Card.module.scss";

const Card = ({ title, description, image, design, reverse }) => (
  <div
    className={`${styles["service-card"]} ${
      reverse ? styles["service-card--reverse"] : ""
    }`}
  >
    <div className={styles["service-card__media"]}>
      {reverse && (
        <img
          className={styles["service-card__design"]}
          src={design}
          alt={design}
        />
      )}
      <img className={styles["service-card__image"]} src={image} alt={title} />
    </div>
    <div className={styles["service-card__content"]}>
      <h3 className={styles["service-card__title"]}>{title}</h3>
      <p className={styles["service-card__text"]}>{description}</p>
    </div>
    {!reverse && (
      <img
        className={styles["service-card__revdesign"]}
        src={design}
        alt={design}
      />
    )}
  </div>
);

export default Card;
