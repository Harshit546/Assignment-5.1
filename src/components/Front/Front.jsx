import React from "react";
import styles from "./Front.module.scss";

const Front = () => (
  <section className={styles.front}>
    <div className={styles.front__bg} />
    <div className={styles.front__media}>
      <img src="/front_img.svg" alt="Mendleson Communication" />
    </div>

    <div className={styles.front__content}>
      <h1 className={styles.front__title}>
        Mendleson Communication and Engagement
      </h1>
      <p className={styles.front__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed
        ipsum, ut quam volutpat, tortor.
      </p>
    </div>
  </section>
);

export default Front;
