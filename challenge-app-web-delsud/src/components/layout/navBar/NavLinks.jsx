import styles from "./navBar.module.css";
const NavLinks = () => {

    return (
        <ul className={styles.navlinks_container}>
            <li>Buscar Alquiler</li>
            <li>Comprar Garantía</li>
            <li>Ser Agente</li>
            <li>Propietarios</li>
        </ul>
    )
}

export default NavLinks;