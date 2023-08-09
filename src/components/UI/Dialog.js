import ReactDOM from "react-dom";
import Button from "./Button";

import styles from "./Dialog.module.css";

const Dialog = ({ children, isOpen, onClose, mode, title }) => {
    const overlay = <div onClick={onClose} className={styles.overlay} />;
    let headerStyling = "";

    switch (mode) {
        case "Success":
            title = "Success";
            headerStyling = styles.success;
            break;
        case "Error":
            title = "Error";
            headerStyling = styles.error;
            break;
        case "Info":
            title = "Information";
            headerStyling = styles.info;
            break;

        default:
            title = "Information";
            headerStyling = styles.info;
            break;
    }

    const content = (
        <div className={styles.dialog}>
            <header className={headerStyling}>{title}</header>
            <div className={styles.dialogContent}>{children}</div>
            <footer>
                <Button buttonConfig={{ onClick: onClose }}>Close</Button>
            </footer>
        </div>
    );
    return (
        <>
            {isOpen && (
                <>
                    {ReactDOM.createPortal(
                        overlay,
                        document.querySelector("#overlay-root")
                    )}
                    {ReactDOM.createPortal(
                        content,
                        document.querySelector("#dialog-root")
                    )}
                </>
            )}
        </>
    );
};

export default Dialog;
