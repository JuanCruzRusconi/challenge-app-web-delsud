const { default: Link } = require("next/link");
import Image from "next/image";
import styles from "./property.module.css";
import PropertySpecs from "./PropertySpecs";

const PropertyCard = ({ id, title, image, price, location, specs }) => {

    return (
        <Link  href={`/properties/${id}`} >
        <article key={id} className={styles.propertyCard_container}>
            <img className={styles.propertyCard_image} 
                src={image}
            />
            <div className={styles.propertyCard_info}>
                <p>{price}/ mensuales</p>
                <h3>{title}</h3>
                <p>{location}</p>
                <div>
                    <PropertySpecs specs={specs}/>
                </div>
            </div>
        </article>
        </Link>
    )
}

export default PropertyCard;