import ReactDOM from "react-dom";
import ClipLoader from "react-spinners/ClipLoader";

import styles from "./BusyOverlay.module.css";

const BusyOverlay = ({ isOpen }) => {
    const busyOverlay = (
        <div className={styles.overlay}>
            <div className={styles.busyIndicator}>
                <ClipLoader color="#0056b3" size={75} />
            </div>
        </div>
    );

    return (
        <>
            {isOpen && (
                <>
                    {ReactDOM.createPortal(
                        busyOverlay,
                        document.querySelector("#overlay-root")
                    )}
                </>
            )}
        </>
    );
};

export default BusyOverlay;
