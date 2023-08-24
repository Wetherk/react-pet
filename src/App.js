import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import UserInfoPage from "./pages/UserInfo";
import AuthPage, { checkAuthLoader } from "./pages/Auth";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import TasksPage, { tasksLoader } from "./pages/Tasks";
import TaskDetailPage, { taskLoader } from "./pages/TaskDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "auth", element: <AuthPage /> },
            {
                path: "user",
                element: <UserInfoPage />,
                loader: checkAuthLoader,
            },
            {
                path: "tasks",
                children: [
                    {
                        index: true,
                        element: <TasksPage />,
                        loader: tasksLoader,
                    },
                    {
                        path: ":taskId",
                        element: <TaskDetailPage />,
                        loader: taskLoader,
                    },
                ],
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
