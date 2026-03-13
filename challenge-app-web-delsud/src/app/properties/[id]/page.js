import { properties } from "@/data/properties";
import PropertyDetail from "@/components/property/propertyDetail/PropertyDetail";
import styles from "./page.module.css";
import PropertiesCarroulsel from "@/components/property/PropertiesCarrousel";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams () {
    return properties
    .filter((property) => property && property.id )
    .map((property) => ({
        id: String(property.id)
    }))
}

export default async function Page({ params }) {

    const { id } = await params;

    const property = properties.find(
        p => String(p.id) === id
    );  

    if(!property) return notFound();

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
