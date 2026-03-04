import Brand from "../../common/Brand";
import FooterCopy from "./FooterCopy";
import FooterSections from "./FooterSections";
import styles from "./footer.module.css";

const footerSections = [
    {   
        title: "BUSCAR PROPIEDADES",
        links: [
            { text: "Departamentos", url: "#" },
            { text: "Casas", url: "#" },
            { text: "Oficinas", url: "#" }
        ]
    },
    {   
        title: "SER UN AGENTE",
        links: [
            { text: "¿Qué es un agente?", url: "#" },
            { text: "¿Cómo ser un agente", url: "#" },
            { text: "¿Cuánto gana un agente?", url: "#" }
        ]
    },
    {   
        title: "CONTACTO",
        links: [
            { text: "Whatsapp", url: "#" },
            { text: "example@example.com.ar", url: "#" },
            { text: "Soporte técnico", url: "#" }
        ]
    }
];

const Footer = () => {

    return (
        <footer className={styles.footer_container}>
            <div className={styles.footer_main}>
                <Brand />
                <div className={styles.footer_sections_container}>
                    {footerSections.map(section => (
                        <FooterSections 
                            key={section.title}
                            title={section.title}
                            links={section.links}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.footer_copy}>
                <FooterCopy />
            </div>
        </footer>
    )
}

export default Footer;