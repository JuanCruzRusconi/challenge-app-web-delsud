import Subtitle from "../Subtitle";
import FooterLinks from "./FooterLinks";
import styles from "./footer.module.css";


const FooterSections = ({ title, links }) => {

    return (
        <div className={styles.footer_sections}>
            <Subtitle text={title} />
            <FooterLinks links={links} />
        </div>
    )
}

export default FooterSections;