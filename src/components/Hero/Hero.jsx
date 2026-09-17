import CallButton from '../CallButton/CallButton'
import styles from './Hero.module.css'

const stats = [
    { value: '5 წელი', label: 'გამოცდილება' },
    { value: '24/7', label: 'მხარდაჭერა' },
    { value: 'უფასო', label: 'მიწოდება' },
]

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroTextArea}>
                <h1 className={styles.title}>
                    ცენტრალური გათბობის მონტაჟი{' '}
                    <span className={styles.mark}>თქვენი სახლისთვის</span>
                </h1>

                <p className={styles.paragraph}>
                    პროფესიონალური ცენტრალური გათბობის მონტაჟი, რადიატორების დაყენება
                    და ქვაბების ინსტალაცია.
                </p>

                <div className={styles.actions}>
                    <CallButton className={styles.primaryButton} number="+995568883279">
                        უფასო კონსულტაცია
                        <img className={styles.arrow} src="/arrow-right-direction-white-icon.webp" alt="" width="20" height="20" />
                    </CallButton>

                    <CallButton className={styles.phoneButton} number="+995568883279">
                        <img className={styles.telephoneIcon} src="/telephoneIcon.webp" alt="" width="22" height="22" />
                        568 88 32 79
                    </CallButton>
                </div>

                <ul className={styles.stats}>
                    {stats.map((s) => (
                        <li key={s.label} className={styles.stat}>
                            <span className={styles.statValue}>{s.value}</span>
                            <span className={styles.statLabel}>{s.label}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.heroImage}>
                <img
                    src="/radiator.webp"
                    alt="ხელოსანი ამონტაჟებს რადიატორს"
                    className={styles.heroImageImg}
                    width="1024"
                    height="683"
                    fetchPriority="high"
                    loading="eager"
                />
                <div className={styles.priceBadge}>
                    <div className={styles.priceText}>
                        <span className={styles.priceLabel}>მონტაჟის ფასი</span>
                        <span className={styles.priceValue}>150₾-დან</span>
                    </div>
                    <img className={styles.priceIcon} src="/buildingicon.webp" alt="" width="52" height="56" />
                </div>
            </div>
        </section>
    )
}

export default Hero
