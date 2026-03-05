import styles from "./modals.module.css"

const HeaderModals = ({ icon, title }) => {

    return (
        <div className={styles.headerModals_content}>
            <img src={icon}></img>
            <h2>{title}</h2>
        </div>
    );
}

export default HeaderModals;