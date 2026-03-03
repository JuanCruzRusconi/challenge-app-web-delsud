import Image from "next/image";
import styles from "./page.module.css";
import PropertyDetail from "@/components/property/PropertyDetail";
import PropertiesPage from "@/components/property/PropertiesPage";
import Subtitle from "../components/layout/Subtitle";

export default function Home() {
  
    return (
    
        <main className={styles.main_container}>
            <Subtitle text="Propiedades disponibles" />
            <PropertiesPage />
        </main>

  );
}
