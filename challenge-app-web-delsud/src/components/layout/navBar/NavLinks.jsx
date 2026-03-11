import Link from "next/link";
import styles from "./navBar.module.css";

const NavLinks = ({ menuOpen, closeMenu }) => {

    return (

        <ul className={`${styles.navlinks_container} ${menuOpen ? styles.menu_open : ""}`}>
            <li className={styles.navlinks_item}>
                <Link className={styles.navlinks_text} href={"/not-found"} onClick={closeMenu}>
                    Buscar Alquiler
                </Link>
            </li>
            <li className={styles.navlinks_item}>
                <Link className={styles.navlinks_text} href={"/not-found"} onClick={closeMenu}>
                    Comprar Garantía
                </Link>
            </li>
            <li className={styles.navlinks_item}>
                <Link className={styles.navlinks_text} href={"/not-found"} onClick={closeMenu}>
                    Ser Agente
                </Link>
            </li>
            <li className={styles.navlinks_item}>
                <Link className={styles.navlinks_text} href={"/not-found"} onClick={closeMenu}>
                    Propietarios
                </Link>
            </li>
        </ul>
    )
}

export default NavLinks;

