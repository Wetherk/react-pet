import { Link, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createAccount, login } from "../store/auth";

import AuthForm from "../components/Auth/AuthForm";
import Card from "../components/UI/Card";
import ErrorPage from "../components/UI/ErrorMessage";

import styles from "./Auth.module.css";

const AuthPage = () => {
    const [queryParams] = useSearchParams();
    const mode = queryParams.get("mode");
    const dispatch = useDispatch();
    const authError = useSelector((state) => state.auth.error);

    if (!!mode && mode !== "signup" && mode !== "login") {
        return <ErrorPage errorMessage={"Unsupported Auth mode"} />;
    }

    let title = "Log In";
    let info = (
        <>
            Don't have an account? Click{" "}
            <Link to="/auth?mode=signup">Here</Link> to create one
        </>
    );

    if (mode === "signup") {
        title = "Sign Up";
        info = (
            <>
                Already have an account? Click{" "}
                <Link to="/auth?mode=login">Here</Link> to Log In
            </>
        );
    }

    const handleCredentialsSubmit = async ({ email, password }) => {
        if (mode === "signup") {
            dispatch(createAccount({ email, password }));
        } else {
            dispatch(login({ email, password }));
        }
    };

    return (
        <section className={styles.authContent}>
            <Card>
                <div className={styles.authContainer}>
                    <h1>{title}</h1>
                    {authError && (
                        <p className={styles.authError}>{authError}</p>
                    )}
                    <AuthForm
                        mode={mode}
                        onCredentialsSubmit={handleCredentialsSubmit}
                    />
                    <p className={styles.authInfo}>{info}</p>
                </div>
            </Card>
        </section>
    );
};

export default AuthPage;
