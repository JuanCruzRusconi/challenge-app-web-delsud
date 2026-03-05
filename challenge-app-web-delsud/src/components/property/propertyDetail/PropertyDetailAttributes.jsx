import styles from "./propertyDetail.module.css";

const PropertyDetailAttributes = ({ attributes = [] }) => {

    return (
        <div className={styles.propertyDetail_complements}>
            {attributes.map(a => (
                <p className={styles.text_general} key={a}>
                    {a}
                </p>
            ))}
        </div>
    );
}

export default PropertyDetailAttributes;