import styles from "./common.module.css";

const Subtitle = ({ text }) => {

    return (
        <h3 className={styles.subtitle_text}>{text}</h3>
    )
}

export default Subtitle;