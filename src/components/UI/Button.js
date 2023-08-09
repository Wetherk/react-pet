import styles from "./Button.module.css";

const Button = (props) => {
    const buttonClass = `${props.className} ${styles.button} ${
        props.mode === "secondary"
            ? styles["button-secondary"]
            : styles["button-primary"]
    } `;

    return (
        <button className={buttonClass} {...props.buttonConfig}>
            {props.children}
        </button>
    );
};

export default Button;
