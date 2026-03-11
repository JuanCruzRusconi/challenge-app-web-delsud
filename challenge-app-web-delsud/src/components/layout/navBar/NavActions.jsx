import styles from "./navBar.module.css";

const NavActions = ({ menuOpen }) => {

    return (
        <div className={`${styles.navActions_container} ${menuOpen ? styles.menu_open : ""}`}>
            <button className={`${styles.navButton} ${styles.login}`}>Ingresar</button>
            <button className={`${styles.navButton} ${styles.register}`}>Registrarse</button>
        </div>
    )
}

export default NavActions;