import PropertyCard from "./PropertyCard";
import PropertyList from "./PropertiesList";
import PropertySubtitle from "./PropertySubtitle";
import styles from "./property.module.css";

const PropertiesCarroulsel = ({ properties }) => {

    if (!properties.length) return <p>No hay propiedades.</p>;
    
    return (
        <div className={styles.propertiesCarrousel_container}>
            <div className={styles.propertiesCarrousel_title}>
                <PropertySubtitle text="Propiedades que podrían interesarte" />
            </div>
            <div className={styles.propertiesCarrousel_cards_container}>
                {properties.map(property => (
                    <PropertyCard 
                        key={property.id} 
                        id={property.id}
                        title={property.title}
                        image={property.image}
                        price={property.price}
                        location={property.location}
                        specs={property.specs}
                    />
                ))}
            </div>
        </div>
    );
}

export default PropertiesCarroulsel;