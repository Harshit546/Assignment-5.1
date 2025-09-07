import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const links = [
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = () => (
  <header className={styles.navbar}>
    <NavLink to="/" className={styles.navbar__logo}>
      <img src="/logo.jpg" alt="Company Logo" />
    </NavLink>

    <nav className={styles.navbar__menu}>
      <ul className={styles["navbar__list"]}>
        {links.map(({ to, label }) => (
          <li key={to} className={styles["navbar__item"]}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `${styles.navbar__link} ${
                  isActive ? styles["navbar__link--active"] : ""
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Navbar;
