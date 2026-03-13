import servicesData from '../../data/ServiceData'
import styles from './Services.module.css'
import ServicesCard from './ServicesCard/ServicesCard'


const Services = () => {

    return (
        <section>
            <h2 className={styles.title}>
                ჩვენი <span className={styles.highlight}>სერვისები</span>
            </h2>

            <p className={styles.paragraph}>
                ცენტრალური გათბობისა და მათი მონტაჟის სრული სპექტრის მომსახურება
            </p>

            <div className={styles.servies}>

                {servicesData.map((service, index) => (
                    <ServicesCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        price={service.price}
                        priceColor={service.priceColor}
                    />
                ))}

            </div>
        </section>
    )
}

export default Services