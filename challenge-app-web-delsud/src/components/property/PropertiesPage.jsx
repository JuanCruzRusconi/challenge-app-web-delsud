import { properties } from "@/data/properties";
import PropertyList from "./PropertiesList";
import styles from "./property.module.css";
import Subtitle from "../common/Subtitle";

const PropertiesPage = () => {

    return (
        <section className={styles.propertiesPage_container}>
            <Subtitle className={styles.propertiesPage_subtitle} text={"Propiedades disponibles"} />
            <PropertyList properties={properties} />
        </section>
    );
}

export default PropertiesPage;