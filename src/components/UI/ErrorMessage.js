import styles from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {
    return (
        <div className={styles["error-message"]}>
            <h1>{props.errorTitle || "Error"}</h1>
            <p>
                <i>{props.errorMessage}</i>
            </p>
        </div>
    );
};

export default ErrorMessage;
