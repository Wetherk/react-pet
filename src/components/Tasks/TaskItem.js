import { useNavigate } from "react-router-dom";

const TaskItem = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/tasks/${props.id}`);
    };

    return (
        <li onClick={handleClick}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </li>
    );
};

export default TaskItem;
