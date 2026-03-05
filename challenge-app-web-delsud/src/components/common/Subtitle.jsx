import styles from "./common.module.css";

const Subtitle = ({ text }) => {

    return (
        <h4 className={styles.subtitle_text}>{text}</h4>
    )
}

export default Subtitle;