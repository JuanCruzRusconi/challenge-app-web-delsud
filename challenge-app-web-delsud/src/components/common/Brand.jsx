import Image from "next/image";
import styles from "./common.module.css";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-logo",
  weight: ["800"],
});

const Brand = ({ color }) => {

    return (
        <>
            <Link className={styles.brand_container} href={"/"}>
                <Image src="/icons/RectangleLogo.png" alt="logo"
                    height={16}
                    width={16}/>
                <p className={`${montserratFont.variable} ${styles.brand}`}>LOGO EMPRESA</p>
            </Link>
        </>
    )
}

export default Brand;