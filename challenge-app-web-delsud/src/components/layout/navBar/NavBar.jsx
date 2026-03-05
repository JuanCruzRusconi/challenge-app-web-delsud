import Brand from "../../common/Brand";
import NavActions from "./NavActions";
import NavLinks from "./NavLinks";
import styles from "./navBar.module.css";

const NavBar = () => {

    return ( 
        <>
            <header className={styles.header_container}>
                <nav className={styles.nav_container}>
                    <Brand />
            
                    <NavLinks />

                    <NavActions />
                </nav>
            </header>
            <hr className={styles.header_divider}></hr>
        </>
    );
}

export default NavBar;