import styles from './ServicesCard.module.css'





const ServicesCard = ({ icon, title, description, price, priceColor }) => {

    return (
        <div className={styles.wrapper}>
            <img className={styles.icon} src={icon} alt={title} />

            <div className={styles.titleWrap}>
                <h2 className={styles.titleWrap}>{title}</h2>
                <p className={styles.description}>{description}</p>
            </div>

            <div>
                <span className={styles.price} style={{ color: priceColor }}>{price} {typeof price == "number" ? '₾' : ''}</span>
            </div>
        </div>
    )
}

export default ServicesCard