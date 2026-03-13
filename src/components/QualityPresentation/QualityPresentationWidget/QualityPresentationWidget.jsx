import styles from './QualityPresentationWidget.module.css' 

const QualityPresentationWidget = ({ icon, title, description }) => {
    return (
        <div className={styles.widgetWrapper}>
            <img className={styles.icon} src={icon} alt={title} />
            <div>
                <h4>{title}</h4>
                <p className={styles.paragraph}>{description}</p>
            </div>
        </div>
    )
}

export default QualityPresentationWidget