import styles from "./footer.module.css";

const FooterLinks = ({ links }) => {

    return (
        <div className={styles.footer_links}>
            {links.map(link => (
                <li key={link.text}>
                    <a className={styles.text_links} href="{link.url}">{link.text}</a>
                </li>
            ))}
        </div>
    )
}

export default FooterLinks;