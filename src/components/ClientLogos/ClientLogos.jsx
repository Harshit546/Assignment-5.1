import React from "react";
import styles from "./ClientLogos.module.scss";
import Logos from "./Logos";
import { NavLink } from "react-router-dom";

const firstRow = [
  "client10.svg",
  "client2.svg",
  "client3.svg",
  "client4.svg",
  "client5.svg",
];
const secondRow = ["client6.svg", "client7.svg", "client8.svg", "client9.svg"];
const thirdRow = ["client1.svg", "client11.svg", "client12.svg", "client13.svg", "client14.svg"];
const fourthRow = ["client15.svg", "client16.svg", "client17.svg", "client18.svg"];

const ClientLogos = () => (
  <section>
    <div className={styles.logo}>
      <h2 className={styles["logo__title"]}>Logo</h2>
      <NavLink to="/" className={styles["logo__image"]}>
        <img src="/logo.jpg" alt="Company Logo" />
      </NavLink>
    </div>
    <hr />
    <div className={styles.clients}>
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

      <div className={styles["clients__row"]}>
        {thirdRow.map((src) => (
          <Logos key={src} src={src} variant="small" />
        ))}
      </div>

      <div className={styles["clients__row"]}>
        {fourthRow.map((src) => (
          <Logos key={src} src={src} variant="large" />
        ))}
      </div>
    </div>
  </section>
);

export default ClientLogos;
