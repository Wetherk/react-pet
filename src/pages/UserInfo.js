import { useSelector, useDispatch } from "react-redux";

import styles from "./UserInfo.module.css";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import { logout } from "../store/auth";

const UserInfoPage = () => {
    const user = useSelector((state) => state.auth.user) || {};
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(logout());
    };

    return (
        <section className={styles.userInfoSection}>
            <Card className={styles.userInfo}>
                <h2>User Information</h2>
                <div className={styles.profile}>
                    <div className={styles.profileImage}>
                        {user.photoURL && (
                            <img src={user.photoURL} alt="Profile" />
                        )}
                        {!user.photoURL && (
                            <img
                                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                                alt="Profile"
                            />
                        )}
                    </div>
                    <div className={styles.profileDetails}>
                        <p>
                            <strong>Name:</strong> {user.displayName}
                        </p>
                        <p>
                            <strong>Email:</strong> {user.email}
                        </p>
                    </div>
                </div>
                <Button buttonConfig={{ onClick: handleSignOut }}>
                    Log Out
                </Button>
            </Card>
        </section>
    );
};

export default UserInfoPage;
