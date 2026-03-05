"use client";
import Brand from "../common/Brand";
import HeaderModals from "./HeaderModal";
import styles from "./modals.module.css";

const OwnerModal = ({ onClose }) => {

    return (
        <div className={styles.ownerModal_container} onClick={onClose}>
            <div className={styles.ownerModal_content} onClick={(e) => e.stopPropagation()}>
                <button className={styles.button_closePrimary} onClick={onClose}>X</button>
                <HeaderModals icon={"/icons/owner.png"} title="Valoración del propietario" />
                <h3>100%</h3>
                <p>Este propietario fue veriricado personalente por un representante oficial de Flexy.</p>
                <div className={styles.ownerModal_info}>
                    <div>
                        <h3>Brinda buena atención.</h3>
                        <p>Sus inquilinos están satisfechos.</p>
                    </div>
                    <div>
                        <h3>Responde a tiempo los tickets</h3>
                        <p>Sus inquilinos están satisfechos.</p>
                    </div>
                    <div>
                        <h3>Inmueble verificado.</h3>
                        <p>El inmueble coincide con las imagenes de la publicación. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OwnerModal;