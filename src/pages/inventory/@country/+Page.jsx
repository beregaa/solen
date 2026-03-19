import { usePageContext } from 'vike-react/usePageContext'
import { navigate } from 'vike/client/router'
import inventoryData from '../../../data/inventoryData.js'
import styles from '../inventory.module.css'
import InventoryCard from '../../../components/InventoryCard/InventoryCard.jsx'

export default function InventoryPage() {
  const { routeParams } = usePageContext()
  const country = routeParams?.country || 'italy'

  const countries = [
    { name: 'turkey', src: '/turkey.png' },
    { name: 'italy', src: '/italy.png' },
    { name: 'china', src: '/china.png' },
  ]

  const filteredProducts = inventoryData.filter(
    (product) => product.country === country
  )

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>ცენტრალური გათბობის ქვაბები</h1>
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
