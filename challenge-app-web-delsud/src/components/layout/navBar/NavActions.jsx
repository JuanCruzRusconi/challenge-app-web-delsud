import styles from "./navBar.module.css";

const NavActions = () => {

    return (
        <div className={styles.navActions_container}>
            <button className={`${styles.navButton} ${styles.login}`}>Ingresar</button>
            <button className={`${styles.navButton} ${styles.register}`}>Registrarse</button>
        </div>
    )
}

export default NavActions;