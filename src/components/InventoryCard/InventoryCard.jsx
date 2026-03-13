import styles from './InventoryCard.module.css'

const InventoryCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {product.image ? (
          <img className={styles.images} src={product.image} alt={product.name} />
        ) : (
          <div className={styles.placeholder}>No Image</div>
        )}
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.price}>{product.price} ₾  <span className={styles.free}>+ უფასო მონტაჟი</span></p>
      </div>
    </div>
  )
}

export default InventoryCard