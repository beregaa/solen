import { Carousel } from 'antd'

import styles from './BoilerCarousel.module.css'
import italyInventory from '../../../data/inventoryData'

const BoilerCarousel = () => {
  return (
    <Carousel  arrows infinite autoplay autoplaySpeed={2500} pauseOnHover>
      {italyInventory.map((product) => (
        <div key={product.id}>
          <div className={styles.slide}>
            <img
              className={styles.image}
              src={product.image}
              alt={product.name}
            />

            <div className={styles.info}>
              <h3 className={styles.title}>{product.name}</h3>
              <p className={styles.price}>{product.price} ₾</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default BoilerCarousel