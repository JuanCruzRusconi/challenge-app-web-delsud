"use client";
import Brand from "@/components/common/Brand";
import styles from "./propertyDetail.module.css";
import { useState } from "react";
import WarrantyModal from "@/components/modals/WarrantyModal";
import ConsultationModal from "@/components/modals/ConsultationModal";
import ReportModal from "@/components/modals/ReportModal";
import OwnerModal from "@/components/modals/OwnerModal";

const PropertyDetailSidebar = ({ price, expenses, available}) => {

    // Modals
    const [ isOpenWarranty, setIsOpenWarranty ] = useState(false);
    const [ isOpenConsultation, setIsOpenConsultation ] = useState(false);
    const [ isOpenReport, setIsOpenReport ] = useState(false);
    const [ isOpenOwner, setIsOpenOwner ] = useState(false);
    const [ isOpenShare, setIsOpenShare ] = useState(false);

    return (
        <div className={styles.propertyDetailSidebar_container}>
            <div className={styles.propertyDetailSidebar_price}>
                <p className={styles.text_amount}>Valor Mensual</p>
                <p className={styles.text_content}><span className={styles.text_price}>{price}</span> /alquiler</p>
                <p className={styles.text_content}><span className={styles.text_price}>{expenses}</span> /expensas</p>
            </div>
            <div>
                <button>
                    Quiero Alquilar
                </button>
            </div>
            <div>
                <p>Disponible a partir de: {available}</p>
                <>
                    <p>Garantía solicitada: <button onClick={() => setIsOpenWarranty(true)}><span className="color-secondary">Garantía Caución.</span></button></p>
                    { isOpenWarranty && <WarrantyModal onClose={() => setIsOpenWarranty(false)} /> }
                </>
            </div>
            <div>
                <p>Alquilá esta propiedad con:</p>
                <Brand />
                <p>propietario</p>
                <div>
                    <p>12 cuotas sin interés de</p>
                    <p></p>
                </div>
                <p>*El propietario la requiere como requisito de alquiler. </p>
            </div>
            <div>
                <p className={styles.color_secondary}>Información del propietario</p>
                <p>propietario mejor</p>
                <>
                    <p>Ver más datos del <button onClick={() => setIsOpenOwner(true)}><span className={styles.color_secondary}>propietario</span></button>.</p>
                    { isOpenOwner && <OwnerModal onClose={() => setIsOpenOwner(false)} /> }
                </>
            </div>
            <div>
                <p>¿Querés saber más? Envianos un mensaje.</p>
                <>
                    <button onClick={() => setIsOpenConsultation(true)}>Consultar</button>
                    { isOpenConsultation && <ConsultationModal onClose={() => setIsOpenConsultation(false)} /> }
                </>
                <>
                    <p>Quiero <button onClick={() => setIsOpenReport(true)}><span className={styles.color_secondary}>reportar</span></button> la publicación/usuario.</p>
                    { isOpenReport && <ReportModal onClose={() => setIsOpenReport(false)} /> }
                </>
            </div>
        </div>
    );
}

export default PropertyDetailSidebar;