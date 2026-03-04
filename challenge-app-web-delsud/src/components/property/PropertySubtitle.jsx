import styles from "./property.module.css";

const PropertySubtitle = ({text}) => {

    return (
        <h2 className={styles.propertySubtitle}>{text}</h2>
    )
}

export default PropertySubtitle;