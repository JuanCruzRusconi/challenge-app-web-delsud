"use client";
import { useState } from "react";
import Brand from "../common/Brand";
import styles from "./modals.module.css";

const ConsultationModal = ({ onClose }) => {

    const [ form, setForm ] = useState({ 
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
        <div className={styles.consultationModal_container} onClick={onClose}>
            <div className={styles.consultationModal_content} onClick={(e) => e.stopPropagation()}>
                <button className={styles.button_closeSecondary} onClick={onClose}>X</button>
                <Brand />
                <form className={styles.reportModal_form} onSubmit={handleOnSubmit}>
                    <div className={styles.consultModal_value}>
                        <p className={styles.reportModal_text}>Dejanos tu consulta</p>
                        <input 
                            type="text" 
                            name="email"
                            value={form.email} 
                            placeholder="Escribí tu consulta." 
                            onChange={(e) => setForm({...form, email: e.target.value})}
                            className={styles.consultModal_input}
                        />
                    </div>
                    <button type="submit" className={styles.reportModal_send}>Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default ConsultationModal;