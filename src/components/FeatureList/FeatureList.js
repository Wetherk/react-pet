import { useNavigate } from "react-router-dom";

import Button from "../UI/Button";
import styles from "./FeatureList.module.css";

const FeatureList = () => {
    const features = [
        {
            id: "taskManager",
            title: "Task Manager",
            route: "/tasks",
        },
    ];
    const navigate = useNavigate();

    const handleFeatureClick = (event) => {
        const navTo = event.target.getAttribute("id");
        navigate(navTo);
    };

    return (
        <ul className={styles["feature-list"]}>
            {features.map((feature) => (
                <li key={feature.id} className={styles["feature-item"]}>
                    {feature.title}
                    <Button
                        buttonConfig={{
                            id: feature.route,
                            onClick: handleFeatureClick,
                        }}
                        className={styles.button}
                    >
                        To feature
                    </Button>
                </li>
            ))}
        </ul>
    );
};

export default FeatureList;
