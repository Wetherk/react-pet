import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
    return (
        <div>
            <label className={styles.label} htmlFor={props.inputConfig?.id}>
                {props.label}
            </label>
            <input className={styles.input} {...props.inputConfig} />
        </div>
    );
};

export default Input;
