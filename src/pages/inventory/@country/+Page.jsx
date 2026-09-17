import { usePageContext } from 'vike-react/usePageContext'
import inventoryData from '../../../data/inventoryData.js'
import styles from '../inventory.module.css'
import InventoryCard from '../../../components/InventoryCard/InventoryCard.jsx'

const countries = [
  { name: 'turkey', label: 'თურქეთი', src: '/turkey.png' },
  { name: 'italy', label: 'იტალია', src: '/italy.png' },
  { name: 'china', label: 'ჩინეთი', src: '/china.png' },
]

export default function InventoryPage() {
  const { routeParams } = usePageContext()
  const country = routeParams?.country || 'italy'
  const products = inventoryData.filter((product) => product.country === country)

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>ცენტრალური გათბობის ქვაბები</h1>

        <nav className={styles.tabs} aria-label="მწარმოებელი ქვეყანა">
          {countries.map((c) => (
            <a
              key={c.name}
              href={`/inventory/${c.name}`}
              className={country === c.name ? `${styles.tab} ${styles.active}` : styles.tab}
              aria-current={country === c.name ? 'page' : undefined}
            >
              <img className={styles.flag} src={c.src} alt="" width="36" height="24" />
              {c.label}
            </a>
          ))}
        </nav>

        <div className={styles.products}>
          {products.map((product) => (
            <InventoryCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
