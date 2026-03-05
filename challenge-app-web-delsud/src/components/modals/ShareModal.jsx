import HeaderModals from "./HeaderModal";
import styles from "./modals.module.css";

const ShareModal = ({ onClose }) => {

    return (
        <div className={styles.shareModal_container} onClick={onClose}>
            <div className={styles.shareModal_content} onClick={(e) => e.stopPropagation()}>
                <button className={styles.button_closePrimary} onClick={onClose}>X</button>
                <HeaderModals icon={"/icons/share.svg"} title="Compartir Publicación" />
                <p className={styles.shareModal_text}>Seleccioná una opción :</p>
                <div className={styles.shareButtons_container}>
                    <button className={styles.share_button}>Enviar por Whatsapp</button>
                    <button className={styles.share_button}>Copiar enlace</button>
                </div>
            </div>
        </div>
    );
}

export default ShareModal;