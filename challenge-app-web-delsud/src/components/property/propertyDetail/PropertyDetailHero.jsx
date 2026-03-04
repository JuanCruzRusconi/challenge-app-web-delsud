import Image from "next/image";
import styles from "./propertyDetail.module.css";
import Link from "next/link";

const PropertyDetailHero = ({ title, image, location, available }) => {   

    return (
        <>
            <header className={styles.propertyDetailHero_header_container}>
                <div className={styles.propertyDetailHero_header_info}>
                    <Link href="/">
                        <button className={styles.button_return}>
                            <img className={styles.icon_return} src="/icons/IconReturn.png"/>
                            Volver
                        </button>
                    </Link>
                    <h1>{title}</h1>
                    <p className={styles.text_general}>{location}</p>
                </div>
                <div className={styles.propertyDetailHero_header_actions}>
                    { available ? <button className={styles.available_button}>Disponible para alquiler digital</button> : null}
                    <img className={styles.button_actions} src="/icons/ButtonLike.png"/>
                    <img className={styles.button_actions} src="/icons/ButtonShare.png" />
                </div>
            </header>
            <div style={{ position: "relative", width: "100%", height: "450px", "border-radius": "8px", overflow: "hidden" }}>
                    <Image 
                        src={image} 
                        alt="casa"
                        fill
                        style={{ objectFit: "cover" }}
                    />
            </div>
        </>
    );
}

export default PropertyDetailHero;