import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useNavigation, useNavigate } from "react-router-dom";

import NavigationHeader from "../components/Navigation/NavigationHeader";
import styles from "./Root.module.css";
import Dialog from "../components/UI/Dialog";
import BusyOverlay from "../components/UI/BusyOverlay";
import { uiActions } from "../store/ui";

const RootLayout = () => {
    const user = useSelector((state) => state.auth.user);
    const isLoggedInChanged = useSelector(
        (state) => state.auth.isLoggedInChanged
    );
    const notification = useSelector((state) => state.ui.notification);
    const isPageBusy = useSelector((state) => state.ui.isPageBusy);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedInChanged) {
            if (user) navigate("/");
            if (!user) navigate("/auth?mode=login");
        }
    }, [user, isLoggedInChanged, navigate]);

    const handleClose = () => {
        dispatch(uiActions.closeNotification());
    };

    return (
        <>
            <NavigationHeader className={styles.header} />
            {navigation.state === "loading" && (
                <div className={styles.overlay}></div>
            )}
            <div className={styles.content}>
                <Dialog
                    mode={notification.type}
                    onClose={handleClose}
                    isOpen={notification.open}
                >
                    {notification.message}
                </Dialog>
                <Outlet />
            </div>
            <BusyOverlay isOpen={isPageBusy} />
        </>
    );
};

export default RootLayout;
