import Image from "next/image";
import styles from"./propertyDetail.module.css";

const PropertyDetailSpecs = ({ specs }) => {

    return (
        <>
            {specs.map(spec => (
                <div key={spec.key} className={styles.propertyDetailSpecs_content}>
                    <p>{spec.label}</p>
                    <div className={styles.propertyDetailSpecs_value}>
                        <Image 
                            src={spec.icon}
                            alt={spec.label}
                            width={24}
                            height={24} 
                        />
                        <p>{spec.value}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default PropertyDetailSpecs;