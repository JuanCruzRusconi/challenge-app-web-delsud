import styles from "./property.module.css";

const PropertySpecs = ({ specs }) => {

    const  visibleSpecs = specs?.filter(spec => (
        ["bedrooms", "bathrooms", "surface"].includes(spec.key)
    ))
    return (
        <ul className="propertySpecs_container">
            {visibleSpecs?.map(spec => (
                <li className={styles.propertySpecs_item} key={spec.key}>
                    <p> {spec.value} {spec.label}</p>
                </li>
            ))}
        </ul>
    );
}

export default PropertySpecs;