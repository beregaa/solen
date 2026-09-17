import styles from './ServicesCard.module.css'

const ServicesCard = ({ icon, title, description, price }) => {
    const priceText = typeof price === 'number' ? `${price} ₾` : price

    return (
        <article className={styles.card}>
            <img className={styles.icon} src={icon} alt="" width="56" height="56" loading="lazy" />
            <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <span className={styles.price}>{priceText}</span>
            </div>
        </article>
    )
}

export default ServicesCard
