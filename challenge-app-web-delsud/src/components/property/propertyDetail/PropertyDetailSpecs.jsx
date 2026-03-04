import Image from "next/image";
import styles from"./propertyDetail.module.css";

const PropertyDetailSpecs = ({ specs }) => {

    return (
        <div className={styles.propertyDetailSpecs_container}>
            <div className={styles.propertyDetailSpecs_badges}>
                <p className={styles.text_badges}>Fotos</p>
                <p className={styles.text_badges}>Planos</p>
                <p className={styles.text_badges}>Recorrido virtual</p>
            </div>
            <div className={styles.propertyDetailSpecs_specs}>
                {specs.map(spec => (
                    <div key={spec.key} className={styles.propertyDetailSpecs_content}>
                        <p className={styles.text_content}>{spec.label}</p>
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
                </div>
        </div>
    );
}

export default PropertyDetailSpecs;