import React from "react";
import styles from "./About.module.scss";
import Card from "./Card";

const cards = [
  {
    icon: "/Engagement_icon.jpg",
    title: "Engagement",
    text: "We are engagement specialists, who have led projects at all levels of the IAP2 spectrum. READ MORE",
  },
  {
    icon: "/communication_icon.jpg",
    title: "Communications",
    text: "We are award-winning leaders in communications and campaign management. READ MORE",
  },
];

const About = () => (
  <section className={styles.about}>
    <div className={styles.about__image}>
      <img src="/about_img.svg" alt="About Us" />
    </div>

    <div className={styles.about__content}>
      <h2 className={styles.about__title}>ABOUT US</h2>
      <img
        src="/about_bar.svg"
        alt="decorative bar"
        className={styles.about__bar}
      />
      <p className={styles.about__text}>
        We love what we do and are driven by achieving great results for our
        clients. Our awards and impressive client list are testament to our high
        quality approach. We deliver value, creativity, results and exceptional
        levels of customer service and professionalism. We specialise in
        infrastructure development, energy and natural resources.
      </p>

      <div className={styles.about__cards}>
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </div>
  </section>
);

export default About;
