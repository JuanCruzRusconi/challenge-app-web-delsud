import styles from "./propertyDetail.module.css";

const PropertyDetailServices = ({ services }) => {

    return (
        <div className={styles.propertyDetail_complements}>
            {services.map(s => (
                <p className={styles.text_general} key={s}>
                    {s}
                </p>
            ))}
        </div>
    );
}

export default PropertyDetailServices;