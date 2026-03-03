import NavActions from "./NavActions";
import NavLinks from "./NavLinks";
import styles from "./navBar.module.css";
import Brand from "../Brand";

const NavBar = () => {

    return ( 
        <header className={styles.header_container}>
            <nav className={styles.nav_container}>
                <Brand />

                <NavLinks />

                <NavActions />
            </nav>
        </header>
    );
}

export default NavBar;