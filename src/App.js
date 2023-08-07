import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import UserInfoPage from "./pages/UserInfo";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "user", element: <UserInfoPage /> },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;