import styles from './InventoryCard.module.css'

const InventoryCard = ({ product }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {product.image ? (
          <img className={styles.image} src={product.image} alt={product.name} loading="lazy" />
        ) : (
          <div className={styles.placeholder}>ფოტო მალე</div>
        )}
      </div>

      <div className={styles.info}>
        <h2 className={styles.title}>{product.name}</h2>
        <p className={styles.price}>{product.price} ₾</p>
        <span className={styles.free}>+ უფასო მონტაჟი</span>
      </div>
    </article>
  )
}

export default InventoryCard
