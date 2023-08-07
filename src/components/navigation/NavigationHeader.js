import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationHeader.module.css";

const NavigationHeader = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? styles.activeNavLink : styles.navLink
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink
                            to="/user"
                            className={({ isActive }) =>
                                isActive ? styles.activeNavLink : styles.navLink
                            }
                        >
                            User Info
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavigationHeader;
