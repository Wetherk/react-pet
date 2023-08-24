import TaskItem from "./TaskItem";
import Card from "../UI/Card";
import styles from "./TaskList.module.css";

const TaskList = (props) => {
    return (
        <Card>
            <h1>Your Tasks</h1>
            <ul className={styles["tasks-list"]}>
                {!props.tasks && <h1>No tasks found</h1>}
                {props.tasks &&
                    props.tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                        />
                    ))}
            </ul>
        </Card>
    );
};

export default TaskList;
