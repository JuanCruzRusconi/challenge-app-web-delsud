import styles from "./navBar.module.css";
const NavLinks = () => {

    return (
        <ul className={styles.navlinks_container}>
            <li className={styles.navlinks_item}>Buscar Alquiler</li>
            <li className={styles.navlinks_item}>Comprar Garantía</li>
            <li className={styles.navlinks_item}>Ser Agente</li>
            <li className={styles.navlinks_item}>Propietarios</li>
        </ul>
    )
}

export default NavLinks;