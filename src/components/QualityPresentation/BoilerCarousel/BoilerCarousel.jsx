import Carousel from 'antd/es/carousel'

import styles from './BoilerCarousel.module.css'
import inventoryData from '../../../data/inventoryData'

const BoilerCarousel = () => {
  return (
    <Carousel  arrows infinite autoplay autoplaySpeed={2500} pauseOnHover>
      {inventoryData.map((product) => (
        <div key={product.id}>
          <a className={styles.slide} href={`/inventory/${product.country}/${product.slug}`}>
            <img
              className={styles.image}
              src={product.image}
              alt={product.name}
              loading="lazy"
            />

            <div className={styles.info}>
              <h3 className={styles.title}>{product.name}</h3>
              <p className={styles.price}>{product.price} ₾</p>
            </div>
          </a>
        </div>
      ))}
    </Carousel>
  )
}

export default BoilerCarousel