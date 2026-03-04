import styles from "./propertyDetail.module.css"

const PropertyDetailLocation = ({ location }) => {

    return (
        <p className={styles.text_general}>
            {location}
        </p>
    );
}

export default PropertyDetailLocation;