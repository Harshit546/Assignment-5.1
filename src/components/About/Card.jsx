import React from "react";
import styles from "./Card.module.scss";

const Card = ({ icon, title, text }) => (
  <div className={styles.card}>
    <img src={icon} alt={title} className={styles.card__icon} />
    <h3 className={styles.card__title}>{title}</h3>
    <p className={styles.card__text}>{text}</p>
  </div>
);

export default Card;
