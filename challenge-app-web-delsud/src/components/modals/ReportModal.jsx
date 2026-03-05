import { useState } from "react";
import styles from "./modals.module.css";
import HeaderModals from "./HeaderModal";

const ReportModal = ({ onClose }) => {

    const [ form, setForm ] = useState({ 
        email: "",
        urgency: "",
        message: ""
    });

    const handleOnSubmit = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        // Prueba junto con e.preventDefault()
        console.log({form});
    }

    return (
        <div className={styles.reportModal_container} onClick={onClose}>
            <div className={styles.consultationModal_content} onClick={(e) => e.stopPropagation()}>
                <button className={styles.button_closePrimary} onClick={onClose}>X</button>
                <HeaderModals icon={"/icons/report.svg"} title="Reportar publicación" />
                <p className={styles.reportModal_text}>Completá el formulario para reportar la publicación. </p>
                <form className={styles.reportModal_form} onSubmit={handleOnSubmit}>
                    <div>
                        <p className={styles.reportModal_text}>Email</p>
                        <input 
                            type="text" 
                            name="email"
                            value={form.email} 
                            placeholder="Escribí tu email" 
                            onChange={(e) => setForm({...form, email: e.target.value})}
                            className={styles.reportModal_input}
                        />
                    </div>
                    <div>
                        <p className={styles.reportModal_text}>Urgencia</p>
                        <select 
                            name="urgency"
                            value={form.urgency} 
                            className={styles.reportModal_input}
                            onChange={(e) => setForm({...form, urgency: e.target.value})}>
                            <option value="">Seleccionar</option>
                            <option value="alquiler">Alquiler</option>
                            <option value="venta">Venta</option>
                            <option value="compra">Compra</option>
                        </select>
                    </div>
                    <div>
                        <p className={styles.reportModal_text}>Mensaje</p>
                        <input 
                            type="text" 
                            name="message"
                            value={form.message} 
                            placeholder="Dejanos un mensaje" 
                            onChange={(e) => setForm({...form, message: e.target.value})}
                            className={styles.reportModal_input}
                        />
                    </div>
                    <button type="submit" className={styles.reportModal_send}>Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default ReportModal;