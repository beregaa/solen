import { ClientOnly } from 'vike-react/ClientOnly'
import CallButton from '../CallButton/CallButton'
import BoilerCarousel from './BoilerCarousel/BoilerCarousel'
import styles from './QualityPresentation.module.css'
import QualityPresentationWidget from './QualityPresentationWidget/QualityPresentationWidget'

const QualityPresentation = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <ClientOnly fallback={<div className={styles.carouselPlaceholder} />}>
            <BoilerCarousel />
          </ClientOnly>
        </div>

        <div className={styles.texts}>
          <div>
            <h2 className={styles.title}>
              ცენტრალური გათბობა
              <span className={styles.accent}>+ უფასო მონტაჟი</span>
            </h2>
            <p className={styles.paragraph}>
              უმაღლესი ხარისხის გათბობის ქვაბი თურქეთიდან — იდეალური საშუალო ზომის ბინებისთვის,
              ენერგოეფექტური და გრძელვადიანი.
            </p>
          </div>

          <div className={styles.widgetwrap}>
            <QualityPresentationWidget icon="/sheald.webp" title="5-წლიანი გარანტია" description="სრული გარანტია მწარმოებლისგან" />
            <QualityPresentationWidget icon="/ectroo.webp" title="ენერგოეფექტურობა" description="დაზოგეთ გათბობის ხარჯები" />
            <QualityPresentationWidget icon="/truck2.webp" title="უფასო მიწოდება" description="მთელი საქართველოს მასშტაბით" />
          </div>

          <div className={styles.buttons}>
            <a className={styles.order} href="/inventory/turkey">ქვაბების ნახვა</a>
            <CallButton className={styles.call} number="+995568883279">
              დარეკვა
            </CallButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QualityPresentation
