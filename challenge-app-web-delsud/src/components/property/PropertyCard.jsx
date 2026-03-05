const { default: Link } = require("next/link");
import PropertySpecs from "./PropertySpecs";
import styles from "./property.module.css";

const PropertyCard = ({ id, title, image, price, location, specs }) => {

    return (
        <Link  href={`/properties/${id}`} >
        <article key={id} className={styles.propertyCard_container}>
            <img className={styles.propertyCard_image} 
                src={image}
            />
            <div className={styles.propertyCard_info}>
                <p className={styles.propertyCard_price}><span className={styles.propertyCard_priceColor}>{price}</span>/ mensuales</p>
                <h3 className={styles.propertyCard_title}>{title}</h3>
                <p className={styles.propertyCard_location}>{location}</p>
                <div className={styles.propertyCard_specs}>
                    <hr className={styles.divider} />
                    <PropertySpecs specs={specs}/>
                </div>
            </div>
        </article>
        </Link>
    )
}

export default PropertyCard;