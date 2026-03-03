import PropertyDetailHero from "./PropertyHero";
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
            <PropertyDetailHero title={property.title} image={property.image} />
            <div className={styles.propertyDetail_specs}>
                <section className={styles.propertyDetail_specs_section}>
                    <div className={styles.propertyDetail_specsItems}>
                        <PropertyDetailSpecs specs={property.specs} />
                    </div>
                    <div>
                        <PropertySubtitle text="Descripción" />
                        <PropertyDetailDescription text={property.description} />
                    </div>
                    <div>
                        <PropertySubtitle text="Atributos Generales" />
                        <PropertyDetailAttributes attributes={property.generalAttributes} />
                    </div>
                    <div>
                        <PropertySubtitle text="Servicios" />
                        <PropertyDetailServices services={property.services} />
                    </div>
                    <div>
                        <PropertySubtitle text="Ubicación en el mapa" />
                        <PropertyDetailLocation location={property.location} />
                    </div>
                </section>
                <aside className={styles.propertyDetail_specs_aside}>
                    <PropertyDetailSidebar />
                </aside>
            </div>
        </article>
        
    )
}

export default PropertyDetail;