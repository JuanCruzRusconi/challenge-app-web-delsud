import styles from "./footer.module.css";

const FooterCopy = () => {

    return (
        <>
        <hr className={styles.footerCopy_divider} />
        <section className={styles.footerCopy_container}>
            <p className={styles.footerCopy_text}>©2022 Example. Todos los derechos reservados.</p>
            <div className={styles.footerCopy_icons}>
                <img className={styles.footerCopy_logo} src="/icons/facebook.png"></img>
                <img className={styles.footerCopy_logo} src="/icons/instagram.png"></img>
                <img className={styles.footerCopy_logo} src="/icons/twitter.png"></img>
                <img className={styles.footerCopy_logo} src="/icons/linkedin.png"></img>
            </div>
        </section>
        </>
    );
}

export default FooterCopy;