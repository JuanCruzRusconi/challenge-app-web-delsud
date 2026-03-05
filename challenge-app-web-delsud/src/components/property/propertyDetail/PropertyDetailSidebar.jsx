"use client";
import Brand from "@/components/common/Brand";
import { useState } from "react";
import WarrantyModal from "@/components/modals/WarrantyModal";
import ConsultationModal from "@/components/modals/ConsultationModal";
import ReportModal from "@/components/modals/ReportModal";
import OwnerModal from "@/components/modals/OwnerModal";
import styles from "./propertyDetail.module.css";

const PropertyDetailSidebar = ({ price, expenses, date }) => {

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
            <div className={styles.propertyDetailSidebar_apply_consult_container}>
                <button className={styles.propertyDetailSidebar_apply_consult_button} onClick={() => setIsOpenConsultation(true)}>
                    { isOpenConsultation && <ConsultationModal onClose={() => setIsOpenConsultation(false)} /> }
                    Quiero Alquilar
                </button>
            </div>
            <div className={styles.propertyDetailSidebar_date_warranty}>
                <div className={styles.propertyDetailSidebar_date_element}>
                    <img src="/icons/calendar.png" className={styles.date_icon}/>
                    <p>Disponible a partir de: {date}</p>
                </div>
                <hr className={styles.propertyDetailSidebar_divider} />
                <>
                    <p>Garantía solicitada: <button className={styles.button_color} onClick={() => setIsOpenWarranty(true)}><span className={styles.text_color}>Garantía Caución.</span></button></p>
                    { isOpenWarranty && <WarrantyModal onClose={() => setIsOpenWarranty(false)} /> }
                </>
                <hr className={styles.propertyDetailSidebar_divider} />
            </div>
            <div className={styles.propertyDetailSidebar_rentAmount}>
                <p>Alquilá esta propiedad con:</p>
                <Brand />
                <div className={styles.propertyDetailSidebar_rentAmount_cuotes}>
                    <p className={styles.propertyDetailSidebar_rentAmount_text}>12 cuotas sin interés de</p>
                    <p className={styles.propertyDetailSidebar_rentAmount_amount}>{expenses}</p>
                </div>
                <p className={styles.propertyDetailSidebar_rentAmount_advise}>*El propietario la requiere como requisito de alquiler.</p>
            </div>
            <div className={styles.propertyDetailSidebar_owner_content}>
                <p className={styles.propertyDetailSidebar_owner_title}>Información del propietario</p>
                <p className={styles.propertyDetailSidebar_owner_text}>Es uno de los mejores.</p>
                <img className={styles.propertyDetailSidebar_owner_frame} src="/icons/frame.png" />
                <>
                    <p className={styles.propertyDetailSidebar_owner_data}>Ver más datos del <button className={styles.button_color} onClick={() => setIsOpenOwner(true)}><span className={styles.text_color}>propietario</span></button>.</p>
                    { isOpenOwner && <OwnerModal onClose={() => setIsOpenOwner(false)} /> }
                </>
            </div>
            <div className={styles.propertyDetailSidebar_report_content}>
                <p>¿Querés saber más? Envianos un mensaje.</p>
                <div className={styles.propertyDetailSidebar_apply_consult_container}>
                    <button className={styles.propertyDetailSidebar_apply_consult_button} onClick={() => setIsOpenConsultation(true)}>Consultar</button>
                    { isOpenConsultation && <ConsultationModal onClose={() => setIsOpenConsultation(false)} /> }
                </div>
                <>
                    <p className={styles.propertyDetailSidebar_report_text}>Quiero <button className={styles.button_color} onClick={() => setIsOpenReport(true)}><span className={styles.text_color}>reportar</span></button> la publicación/usuario.</p>
                    { isOpenReport && <ReportModal onClose={() => setIsOpenReport(false)} /> }
                </>
            </div>
        </div>
    );
}

export default PropertyDetailSidebar;