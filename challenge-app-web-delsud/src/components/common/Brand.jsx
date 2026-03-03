import styles from "./common.module.css";
import { Montserrat } from "next/font/google";

const montserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-logo",
  weight: ["800"],
});

const Brand = () => {

    return (
        <div className={styles.brand_container}>
            <p className={montserratFont.variable .brand}>LOGO EMPRESA</p>
        </div>
    )
}

export default Brand;