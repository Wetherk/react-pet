import { useLoaderData } from "react-router-dom";

import { fetchData } from "../util/firebase-requests";

const TaskDetailPage = () => {
    const taskData = useLoaderData();

    return (
        <>
            <h1>{taskData.title}</h1>
            <h1>{taskData.description}</h1>
        </>
    );
};

export default TaskDetailPage;

export async function taskLoader({ params }) {
    const response = await fetchData(`tasks/${params.taskId}`);

    const responseData = await response.json();

    return responseData;
}
