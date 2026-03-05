import Link from "next/link";
import Subtitle from "../../common/Subtitle";
import FooterLinks from "./FooterLinks";
import styles from "./footer.module.css";


const FooterSections = ({ title, links }) => {

    return (
        <div className={styles.footer_sections}>
            <Link href={`/${title}`}>
                <Subtitle text={title} />
            </Link>
            <FooterLinks links={links} />
        </div>
    )
}

export default FooterSections;