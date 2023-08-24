import { useState } from "react";

import Input from "../UI/Input";
import Button from "../UI/Button";
import styles from "./AuthForm.module.css";

const AuthForm = ({ mode, onCredentialsSubmit }) => {
    const [email, setEmail] = useState("");
    const [isEmailTouched, setIsEmailTouched] = useState(false);
    const [password, setPassword] = useState("");
    const [isPasswordTouched, setIsPasswordTouched] = useState(false);

    const isEmailValid = email.includes("@");
    const isPasswordValid = password.length > 6;

    const emailHasError = isEmailTouched && !isEmailValid;
    const passwordHasError = isPasswordTouched && !isPasswordValid;

    const formHasError = emailHasError || passwordHasError;
    const isFormValid = isEmailValid && isPasswordValid;

    const handleFormSubmit = (e) => {
        e.preventDefault();

        setIsEmailTouched(true);
        setIsPasswordTouched(true);
        if (!isFormValid) return;

        onCredentialsSubmit({
            email,
            password,
        });
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleEmailBlur = () => {
        setIsEmailTouched(true);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePasswordBlur = () => {
        setIsPasswordTouched(true);
    };

    return (
        <form onSubmit={handleFormSubmit} className={styles.form}>
            <div
                className={`${emailHasError && styles["form-item-error"]} ${
                    styles["form-item"]
                }`}
            >
                <Input
                    label="Email"
                    inputConfig={{
                        id: "email",
                        type: "email",
                        value: email,
                        autoComplete: "username",
                        onChange: handleEmailChange,
                        onBlur: handleEmailBlur,
                    }}
                />
                {emailHasError && (
                    <p className={styles["form-error-message"]}>
                        Enter valid email
                    </p>
                )}
            </div>
            <div
                className={`${passwordHasError && styles["form-item-error"]} ${
                    styles["form-item"]
                }`}
            >
                <Input
                    label="Password"
                    inputConfig={{
                        id: "password",
                        type: "password",
                        value: password,
                        autoComplete: "current-password",
                        onChange: handlePasswordChange,
                        onBlur: handlePasswordBlur,
                    }}
                />
                {passwordHasError && (
                    <p className={styles["form-error-message"]}>
                        Password should be longer than 6 characters
                    </p>
                )}
            </div>

            <div className={styles["form-actions"]}>
                <Button
                    buttonConfig={{ disabled: formHasError }}
                    mode="primary"
                >
                    {mode === "login" ? "Log In" : "Sign Up"}
                </Button>
            </div>
        </form>
    );
};

export default AuthForm;
