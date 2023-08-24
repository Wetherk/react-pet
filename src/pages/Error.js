import { useRouteError } from "react-router-dom";

import NavigationHeader from "../components/Navigation/NavigationHeader";
import styles from "./Error.module.css";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <>
            <NavigationHeader />
            <section className={styles["error-page"]}>
                <h1 className={styles["error-heading"]}>Oops!</h1>
                <p className={styles["error-message"]}>
                    Sorry, an unexpected error has occurred.
                </p>
                <p>
                    <i className={styles["error-details"]}>
                        {error.statusText || error.message}
                    </i>
                </p>
            </section>
        </>
    );
};

export default ErrorPage;
