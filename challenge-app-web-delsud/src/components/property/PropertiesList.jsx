import PropertyCard from "./PropertyCard";
import Subtitle from "../common/Subtitle";
import styles from "./property.module.css";

const PropertyList = ({ properties }) => {

    return (
        <section className={styles.proertyList_container}>
            <div className={styles.propertyList_cards_container}>
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
        </section>
    );
}

export default PropertyList;