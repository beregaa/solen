import { useParams, useNavigate } from 'react-router-dom'
import inventoryData from '../../data/inventoryData.js'
import styles from './inventory.module.css'
import InventoryCard from '../../components/InventoryCard/InventoryCard.jsx'

const InventoryPage = () => {
  const { country } = useParams()
  const navigate = useNavigate()

  const countries = [
    { name: 'turkey', src: '/turkey.png' },
    { name: 'italy', src: '/italy.png' },
    { name: 'china', src: '/china.png' }
  ]

  const filteredProducts = inventoryData.filter(
    (product) => product.country === country
  )

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>ცენტრალური
        გათბობის ქვაბები</h1>
      <div className={styles.content}>


        <div className={styles.flags}>
          {countries.map((c) => (
            <img
              key={c.name}
              src={c.src}
              alt={c.name}
              onClick={() => navigate(`/inventory/${c.name}`)}
              className={
                country === c.name
                  ? `${styles.flag} ${styles.active}`
                  : styles.flag
              }
            />
          ))}
        </div>

        <div className={styles.products}>
          {filteredProducts.map((product) => (
            <InventoryCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default InventoryPage