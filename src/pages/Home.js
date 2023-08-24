import { useSelector } from "react-redux";

import Card from "../components/UI/Card";
import FeatureList from "../components/FeatureList/FeatureList";
import styles from "./Home.module.css";

const HomePage = () => {
    const user = useSelector((state) => state.auth.user);
    let message =
        "Please sign in in order to see the amazing features of this app";

    if (user)
        message =
            "Now you can browse all the amazing features of this application. Lucky you!";

    return (
        <section className={styles.section}>
            <h1>Welcome!</h1>

            <p className={styles.message}>{message}</p>

            {user && (
                <Card className={styles.card}>
                    <h1>Feature list</h1>
                    <FeatureList />
                </Card>
            )}
        </section>
    );
};

export default HomePage;
