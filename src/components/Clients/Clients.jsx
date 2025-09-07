import React from "react";
import styles from "./Clients.module.scss";
import Logos from "./Logos";

const firstRow = [
  "client1.svg",
  "client2.svg",
  "client3.svg",
  "client4.svg",
  "client5.svg",
];
const secondRow = ["client6.svg", "client7.svg", "client8.svg", "client9.svg"];

const Clients = () => (
  <section className={styles.clients}>
    <h2 className={styles["clients__title"]}>OUR CLIENTS</h2>

    <div className={styles["clients__row"]}>
      {firstRow.map((src) => (
        <Logos key={src} src={src} variant="small" />
      ))}
    </div>

    <div className={styles["clients__row"]}>
      {secondRow.map((src) => (
        <Logos key={src} src={src} variant="large" />
      ))}
    </div>
  </section>
);

export default Clients;
