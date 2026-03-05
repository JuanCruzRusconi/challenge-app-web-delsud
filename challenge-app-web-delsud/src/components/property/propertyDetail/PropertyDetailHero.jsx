"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ShareModal from "@/components/modals/ShareModal";
import InterestedModal from "@/components/modals/InterestedModal";
import styles from "./propertyDetail.module.css";

const PropertyDetailHero = ({ title, image, location, available }) => {   

    const [ isOpenShare, setIsOpenShare ] = useState(false);
    const [ isOpenInterested, setIsOpenInteresetd ] = useState(false);

    return (
        <>
            <header className={styles.propertyDetailHero_header_container}>
                <div className={styles.propertyDetailHero_header_info}>
                    <div className={styles.propertyDetailHero_header_actions}>
                        <div className={styles.propertyDetailHero_header_actions_content}>
                            <Link href="/">
                                <button className={styles.button_return}>
                                    <img className={styles.icon_return} src="/icons/IconReturn.png"/>
                                    Volver
                                </button>
                            </Link>
                            <div className={styles.propertyDetailHero_header_actions_buttons}>
                                <img className={styles.button_actions} src="/icons/ButtonLike.png" />
                                <img className={styles.button_actions} src="/icons/ButtonShare.png" onClick={() => setIsOpenShare(true)}/>
                                { isOpenShare && <ShareModal onClose={() => setIsOpenShare(false)} /> }
                            </div>
                        </div>
                        <div className={styles.propertyDetailHero_available_button}>
                            { available ? <button className={styles.available_button} onClick={() => setIsOpenInteresetd(true)}>Disponible para alquiler digital</button> : null}
                            { isOpenInterested && <InterestedModal onClose={() => setIsOpenInteresetd(false)} /> }      
                        </div>
                    </div>
                    <h1 className={styles.propertyDetailHero_title}>{title}</h1>
                    <p className={styles.text_general}>{location}</p>
                </div>
            </header>
            <div style={{ position: "relative", width: "100%", height: "450px", "borderRadius": "8px", overflow: "hidden", zIndex: "1" }}>
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