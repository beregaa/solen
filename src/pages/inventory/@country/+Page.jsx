import { usePageContext } from 'vike-react/usePageContext'
import { navigate } from 'vike/client/router'
import inventoryData from '../../../data/inventoryData.js'
import styles from '../inventory.module.css'
import InventoryCard from '../../../components/InventoryCard/InventoryCard.jsx'
import { Row, Col } from 'antd'


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
              alt={`გათბობის ქვაბები ${c.name}`}
              onClick={() => navigate(`/inventory/${c.name}`)}
              className={
                country === c.name
                  ? `${styles.flag} ${styles.active}`
                  : styles.flag
              }
            />
          ))}
        </div>

        <Row gutter={[30, 30]} justify="start">
          {filteredProducts.map((product) => (
            <Col
              key={product.id}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              xl={6}
            >
              <InventoryCard product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}
