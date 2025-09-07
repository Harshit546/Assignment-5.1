import React from "react";
import styles from "./Services.module.scss";
import Card from "./Card";

const servicesData = [
  {
    title: "Engagement",
    description:
      "We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.",
    image: "/Engagement.svg",
    design: "/design6.svg",
  },
  {
    title: "Communications",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. ",
    image: "/Communication.svg",
    design: "/design7.svg",
  },
  {
    title: "Facilitation",
    description:
      "We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.",
    image: "/facilitation.svg",
    design: "/design8.svg",
  },
  {
    title: "Consultation And Research",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. ",
    image: "/Consultation.svg",
    design: "/design9.svg",
  },
  {
    title: "Training & Mentoring",
    description:
      "We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.",
    image: "/Training.svg",
    design: "/design10.svg",
  },
];

const Services = () => (
  <section className={styles.services}>
    <div className={styles["services__heading"]}>
      <h2 className={styles["services__title"]}>SERVICES</h2>
      <img
        src="/about_bar.svg"
        alt="decorative bar"
        className={styles["services__bar"]}
      />
    </div>

    <div className={styles["services__grid"]}>
      {servicesData.map((svc, idx) => (
        <Card key={svc.title} {...svc} reverse={idx % 2 === 0} />
      ))}
    </div>
  </section>
);

export default Services;
