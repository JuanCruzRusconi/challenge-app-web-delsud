"use client";
import { useState } from "react";
import Brand from "../../common/Brand";
import NavActions from "./NavActions";
import NavLinks from "./NavLinks";
import styles from "./navBar.module.css";

const NavBar = () => {

    const [ menuOpen, setMenuOpen ] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return ( 
        <>
            <header className={styles.header_container}>
                <nav className={styles.nav_container}>
                    <Brand closeMenu={closeMenu} />
                    <button className={styles.menu_button} onClick={() => setMenuOpen(!menuOpen)}>
                        <img src="/icons/menu.png" alt="menu icon" />
                    </button>
                    <NavLinks menuOpen={menuOpen} closeMenu={closeMenu} />

                    <NavActions />
                </nav>
            </header>
            <hr className={styles.header_divider}></hr>
        </>
    );
}

export default NavBar;