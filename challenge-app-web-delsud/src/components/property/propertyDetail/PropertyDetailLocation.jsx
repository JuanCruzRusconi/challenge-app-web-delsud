import styles from "./propertyDetail.module.css"

const PropertyDetailLocation = ({ location, map }) => {

    return (
        <>
            <p className={styles.text_general}>
                {location}
            </p>
            <img src={map} />
        </>
    );
}

export default PropertyDetailLocation;