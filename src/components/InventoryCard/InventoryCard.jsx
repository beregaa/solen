import styles from './InventoryCard.module.css'

const InventoryCard = ({ product }) => {
  return (
    <a className={styles.card} href={`/inventory/${product.country}/${product.slug}`}>
      <div className={styles.imageWrapper}>
        {product.image ? (
          <img className={styles.image} src={product.image} alt={product.name} loading="lazy" />
        ) : (
          <div className={styles.placeholder}>ფოტო მალე</div>
        )}
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.price}>{product.price} ₾</p>
        <span className={styles.free}>+ უფასო მონტაჟი</span>
      </div>
    </a>
  )
}

export default InventoryCard
