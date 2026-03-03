import { properties } from "@/data/properties";
import PropertyList from "./PropertiesList";
import styles from "./property.module.css";

const PropertiesPage = () => {

    return (
        <section className={styles.properties_container}>
            <PropertyList properties={properties} />
        </section>
    );
}

export default PropertiesPage;