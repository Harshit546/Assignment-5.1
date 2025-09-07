import React from "react";
import Column from "./Column";
import styles from "./Contact.module.scss";

const columns = [
  {
    title: "Social",
    items: [
      { label: "Facebook", icon: "/facebook.jpg", href: "#" },
      { label: "LinkedIn", icon: "/linkedin.jpg", href: "#" },
      { label: "Google+", icon: "/google.jpg", href: "#" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Services", to: "#services" },
      { label: "Team", to: "#team" },
      { label: "Clients", to: "#clients" },
    ],
  },
  {
    title: "Contact",
    text: "Lorem Ipsum dummy address used for display 1234567890",
  },
  {
    title: "Email",
    text: "mendescomcommunication@email.com",
  },
];

const Contact = () => (
  <section className={styles.contact}>
    <div className={styles.contact__inner}>
      <div className={styles.contact__grid}>
        {columns.map((col) => (
          <Column key={col.title} {...col} />
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
