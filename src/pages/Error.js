import { useRouteError } from "react-router-dom";

import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className={styles["error-page"]}>
            {" "}
            <h1 className={styles["error-heading"]}>Oops!</h1>
            <p className={styles["error-message"]}>
                Sorry, an unexpected error has occurred.
            </p>
            <p>
                <i className={styles["error-details"]}>
                    {error.statusText || error.message}
                </i>
            </p>
        </div>
    );
};

export default ErrorPage;
