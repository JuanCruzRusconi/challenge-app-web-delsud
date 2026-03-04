import styles from "./propertyDetail.module.css";

const PropertyDetailDescription = ({ text }) => {

    return (
        <p className={styles.text_description}>{text}</p>
    );
}

export default PropertyDetailDescription;