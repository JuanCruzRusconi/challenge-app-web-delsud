"use client"
import WarrantyModal from "@/components/modals/WarrantyModal";
import { useState } from "react";
import styles from "./propertyDetail.module.css"

const PropertyDetailWarranty = () => {

    const [ isWarrantyOpen, setIsWarrantyOpen ] = useState(false);

    return (
        <div className={styles.propertyDetailWarranty_container}>
            <div className={styles.propertyDetailWarranty_logo}>
                <img src="/icons/wraper.png" alt="logo" />
            </div>
            <div className={styles.propertyDetailWarranty_texts}>
                <h4 className={styles.propertyDetailWarranty_title}>¿Necesitás contratar una garantía de alquiler?</h4>
                <p className={styles.propertyDetailWarranty_subtitle}>Podés solicitarla a nuestro partner. </p>
            </div>
            <div >
                <button className={styles.propertyDetailWarranty_button} onClick={() => setIsWarrantyOpen(true)}>Quiero mi garantía</button>
                { isWarrantyOpen && <WarrantyModal onClose={() => setIsWarrantyOpen(false)} />}
            </div>
        </div>
    );
}

export default PropertyDetailWarranty;