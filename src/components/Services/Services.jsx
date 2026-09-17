import servicesData from '../../data/ServiceData'
import styles from './Services.module.css'
import ServicesCard from './ServicesCard/ServicesCard'

const Services = () => {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>ჩვენი სერვისები</h2>
            <p className={styles.paragraph}>
                ცენტრალური გათბობის სისტემების მონტაჟი და მომსახურება — ერთ ადგილას
            </p>

            <div className={styles.services}>
                {servicesData.map((service) => (
                    <ServicesCard key={service.title} {...service} />
                ))}
            </div>
        </section>
    )
}

export default Services
