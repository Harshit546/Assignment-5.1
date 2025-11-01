import React from "react";
import styles from "./Projects.module.scss";
import Images from "./Images";

const projects = [
  {
    src: "/Our_Project.svg",
    alt: "Project Building",
    variant: "large",
  },
  {
    src: "/project1.jpg",
    alt: "Project 1",
    variant: "small",
  },
  {
    src: "/project2.jpg",
    alt: "Project 2",
    variant: "small",
  },
];

const Projects = () => (
  <section className={styles.projects}>
    <div className={styles.projects__heading}>
      <h2 className={styles.projects__title}>OUR PROJECTS</h2>
      <img
        src="/about_bar.svg"
        alt="decorative bar"
        className={styles.projects__bar}
      />
    </div>

    <div className={styles.projects__grid}>
      <div className={styles["projects__item--large"]}>
        <Images {...projects[0]} />
      </div>

      <div className={styles["projects__item-group"]}>
        {projects.slice(1).map((proj) => (
          <div key={proj.alt} className={styles["projects__item--small"]}>
            <Images {...proj} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
