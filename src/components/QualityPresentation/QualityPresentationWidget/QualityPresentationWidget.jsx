import styles from './QualityPresentationWidget.module.css'

const QualityPresentationWidget = ({ icon, title, description }) => {
    return (
        <div className={styles.widgetWrapper}>
            <img className={styles.icon} src={icon} alt="" width="48" height="48" loading="lazy" />
            <div className={styles.text}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.paragraph}>{description}</p>
            </div>
        </div>
    )
}

export default QualityPresentationWidget
