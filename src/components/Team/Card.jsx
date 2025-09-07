import React from "react";
import styles from "./Card.module.scss";

const Card = ({ name, image }) => (
  <div className={styles["team-member"]}>
    <img src={image} alt={name} className={styles["team-member__img"]} />
    <h3 className={styles["team-member__name"]}>{name}</h3>
  </div>
);

export default Card;
