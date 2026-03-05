"use client";
import styles from "./modals.module.css";

const WarrantyModal = ({ onClose }) => {

    return (
        <div className={styles.warrantyModal_container} onClick={onClose}>
            <div className={styles.warrantyModal_content} onClick={(e) => e.stopPropagation()}>
                <button className={styles.button_closeSecondary} onClick={onClose}>X</button>
                <h2 className={styles.brand}>LOGO EMPRESA</h2>
                <p>Nuestra garantía permite a los solicitantes acceder de forma rápida y sencilla a las exigencias de los modernos contratos de alquiler. Los inquilinos que la soliciten, no tienen la necesidad de contar con una garantía propietaria tradicional.</p>
                <button className={styles.button_moreInfo}>Más información</button>
            </div>
        </div>
    );
}

export default WarrantyModal;