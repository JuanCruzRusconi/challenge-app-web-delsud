import { properties } from "@/data/properties";
import PropertyDetail from "@/components/property/propertyDetail/PropertyDetail";
import styles from "./page.module.css";
import PropertiesCarroulsel from "@/components/property/PropertiesCarrousel";

export default async function Page({ params }) {

    const { id } = await params;

    const property = properties.find(
        p => String(p.id) === id
    );  

    if(!property) return "Propiedad no encontrada.";

    const otherProperties = properties.filter(
        p => String(p.id) !== String(property.id)
    );
    
    return (
        <div>
            <PropertyDetail property={property} />
            <div className={styles.propertyCarroulsel}>
                <PropertiesCarroulsel properties={otherProperties} />
            </div>
        </div>
    );
}
