import { Outlet } from "react-router-dom";
import NavigationHeader from "../components/navigation/NavigationHeader";

const RootLayout = () => {
    return (
        <>
            <NavigationHeader />
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default RootLayout;
