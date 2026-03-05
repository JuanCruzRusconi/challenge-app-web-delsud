import Link from "next/link";
import styles from "./navBar.module.css";

const NavLinks = () => {

    return (
        <ul className={styles.navlinks_container}>
            <Link className={styles.navlinks_item} href={"/not-found"}>
                <li className={styles.navlinks_text}>Buscar Alquiler</li>
            </Link>
            <Link className={styles.navlinks_item} href={"/properties"}>
                <li className={styles.navlinks_text}>Comprar Garantía</li>
            </Link>
            <Link className={styles.navlinks_item} href={"/properties"}>
                <li className={styles.navlinks_text}>Ser Agente</li>
            </Link>
            <Link className={styles.navlinks_item} href={"/properties"}>
                <li className={styles.navlinks_text}>Propietarios</li>
            </Link>
        </ul>
    )
}

export default NavLinks;