import styles from "./property.module.css";

const PropertySpecs = ({ specs }) => {

    const  visibleSpecs = specs?.filter(spec => (
        ["bedrooms", "bathrooms", "surface"].includes(spec.key)
    ))
    return (
        <div className={styles.propertySpecs_container}>
            {visibleSpecs?.map(spec => (
                <li className={styles.propertySpecs_item} key={spec.key}>
                    <img src={spec.icon} className={styles.propertySpecs_icon}/>
                    <p className={styles.propertySpecs_value}>{spec.value}</p>
                </li>
            ))}
        </div>
    );
}

export default PropertySpecs;