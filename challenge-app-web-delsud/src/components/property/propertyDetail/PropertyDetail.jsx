import PropertyDetailHero from "./PropertyDetailHero";
import PropertySubtitle from "../PropertySubtitle";
import PropertyDetailSpecs from "./PropertyDetailSpecs";
import PropertyDetailDescription from "./PropertyDetailDescription";
import PropertyDetailAttributes from "./PropertyDetailAttributes";
import PropertyDetailServices from "./PropertyDetailServices";
import PropertyDetailLocation from "./PropertyDetailLocation";
import PropertyDetailSidebar from "./PropertyDetailSidebar";
import styles from "./propertyDetail.module.css";

const PropertyDetail = ({ property }) => {

    return (
        <article key={property.id} className={styles.propertyDetail_container}>
            <PropertyDetailHero 
                title={property.title} 
                image={property.image} 
                location={property.location}
                available={property.available} 
            />
            <div className={styles.propertyDetail_sections}>
                <section className={styles.propertyDetail_specs_section}>
                    <div className={styles.propertyDetail_specsItems}>
                        <PropertyDetailSpecs specs={property.specs} />
                    </div>
                    <div className={styles.propertyDetail_components}>
                        <PropertySubtitle text="Descripción" />
                        <PropertyDetailDescription text={property.description} />
                    </div>
                    <div className={styles.propertyDetail_components}>
                        <PropertySubtitle text="Atributos Generales" />
                        <PropertyDetailAttributes attributes={property.generalAttributes} />
                    </div>
                    <div className={styles.propertyDetail_components}>
                        <PropertySubtitle text="Servicios" />
                        <PropertyDetailServices services={property.services} />
                    </div>
                    <div className={styles.propertyDetail_components}>
                        <PropertySubtitle text="Ubicación en el mapa" />
                        <PropertyDetailLocation location={property.location} />
                    </div>
                </section>
                <aside className={styles.propertyDetail_specs_aside}>
                    <PropertyDetailSidebar 
                        price={property.price} 
                        expenses={property.expenses} 
                        date={property.date}
                    />
                </aside>
            </div>
        </article>
        
    )
}

export default PropertyDetail;