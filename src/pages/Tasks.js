import { useLoaderData } from "react-router-dom";

import { fetchData } from "../util/firebase-requests";
import TaskList from "../components/Tasks/TasksList";
import styles from "./Tasks.module.css";

const TasksPage = () => {
    const tasks = useLoaderData();

    return (
        <section className={styles["task-list-section"]}>
            <TaskList tasks={tasks} />
        </section>
    );
};

export default TasksPage;

export async function tasksLoader() {
    const response = await fetchData("tasks");

    const responseData = await response.json();

    if (!response.ok) throw new Error(responseData.error);

    return responseData;
}
