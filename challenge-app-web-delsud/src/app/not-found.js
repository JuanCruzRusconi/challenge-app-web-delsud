import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound () {

    return (
        <div className={styles.notFound_container}>
            <h1 className={styles.notFound_title}>404</h1>
            <h2 className={styles.notFound_subtitle}>NOT FOUND</h2>
            <h3 className={styles.notFound_text}>Página en desarrollo ...</h3>
            <Link href={"/"}>
               <button className={styles.button_return}>
                    <img className={styles.icon_return} src="/icons/IconReturn.png"/>
                    Volver
                </button>
            </Link>
        </div>
    );
}