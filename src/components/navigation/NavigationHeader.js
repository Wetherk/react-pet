import { useSelector } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import styles from "./NavigationHeader.module.css";
import Button from "../UI/Button";

const NavigationHeader = (props) => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogInClick = () => {
        navigate("/auth?mode=login");
    };

    return (
        <header className={`${props.className} ${styles.header}`}>
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
                    {user && (
                        <li className={styles.navItem}>
                            <NavLink
                                to="/tasks"
                                className={({ isActive }) =>
                                    isActive
                                        ? styles.activeNavLink
                                        : styles.navLink
                                }
                            >
                                Tasks
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>

            {user && (
                <NavLink
                    to="/user"
                    className={({ isActive }) => {
                        const styling = isActive
                            ? styles.activeNavLink
                            : styles.navLink;
                        return `${styles.userInfo} ${styling}`;
                    }}
                >
                    {user.email}
                </NavLink>
            )}
            {!user && (
                <Button
                    className={styles.headerButton}
                    buttonConfig={{
                        onClick: handleLogInClick,
                        disabled: location.pathname === "/auth",
                    }}
                >
                    Log In
                </Button>
            )}
        </header>
    );
};

export default NavigationHeader;
