import Image from "next/image";
import styles from "./page.module.css";
import PropertyDetail from "@/components/property/propertyDetail/PropertyDetail";
import PropertiesPage from "@/components/property/PropertiesPage";
import Subtitle from "../components/common/Subtitle";

export default function Home() {
  
    return (
    
        <main className={styles.main_container}>
            <PropertiesPage />
        </main>

  );
}
