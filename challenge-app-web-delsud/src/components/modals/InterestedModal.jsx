"use client"
import styles from "./modals.module.css"

const InterestedModal = ({ onClose }) => {

    return (
        <div className={styles.interestedModal_container} onClick={onClose}>
            <div className={styles.interestedModal_content} onClick={(e) => e.stopPropagation()}>
                <button className={styles.button_closePrimary} onClick={onClose}>X</button>
                <div className={styles.interestedModal_options}>
                    <button className={styles.reportModal_send}>Consultar</button>
                    <button className={styles.reportModal_send}>Quiero Alquilar</button>
                </div>
            </div>
        </div>
    );
}

export default InterestedModal;