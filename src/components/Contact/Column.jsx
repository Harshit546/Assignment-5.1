import React from "react";
import PropTypes from "prop-types";
import styles from "./Column.module.scss";

const Column = ({ title, items, links, text }) => (
  <div className={styles.column}>
    <h4 className={styles["column__title"]}>{title}</h4>

    {items && (
      <ul className={styles["column__list"]}>
        {items.map(({ label, icon, href }) => (
          <li key={label} className={styles["column__item"]}>
            <a
              href={href}
              aria-label={label}
              className={styles["column__link"]}
            >
              <img src={icon} alt={label} />
              {label}
            </a>
          </li>
        ))}
      </ul>
    )}

    {links && (
      <ul className={styles["column__list"]}>
        {links.map(({ label, to }) => (
          <li key={label} className={styles["column__item"]}>
            <a href={to} className={styles["column__link"]}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    )}

    {text && <p className={styles["column__text"]}>{text}</p>}
  </div>
);

Column.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
  links: PropTypes.array,
  text: PropTypes.string,
};

export default Column;
