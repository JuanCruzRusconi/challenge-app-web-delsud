import styles from "./property.module.css";

const PropertySubtitle = ({text}) => {

    return (
        <h3 className={styles.propertySubtitle}>{text}</h3>
    )
}

export default PropertySubtitle;