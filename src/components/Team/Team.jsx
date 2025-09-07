import React from "react";
import styles from "./Team.module.scss";
import Card from "./Card";

const teamMembers = [
  { name: "Jessica D'suza", image: "/Person1.jpg" },
  { name: "Johny Williams", image: "/Person2.jpg" },
  { name: "Sanya R.", image: "/Person3.jpg" },
];

const Team = () => (
  <section className={styles.team}>
    <div className={styles["team__heading"]}>
      <h2 className={styles["team__title"]}>OUR TEAM</h2>
      <img
        src="/about_bar.svg"
        alt="decorative bar"
        className={styles["team__bar"]}
      />
    </div>

    <div className={styles["team__grid"]}>
      {teamMembers.map((member) => (
        <Card key={member.name} name={member.name} image={member.image} />
      ))}
    </div>
  </section>
);

export default Team;
