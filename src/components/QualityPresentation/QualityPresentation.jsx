
import CallButton from '../CallButton/CallButton'
import BoilerCarousel from './BoilerCarousel/BoilerCarousel'
import styles from './QualityPresentation.module.css'
import QualityPresentationWidget from './QualityPresentationWidget/QualityPresentationWidget'
const QualityPresentation = () => {

    return (
        <section className={styles.wrapper}>
            <div className={styles.content}>

                <div className={styles.imageWrapper}>
                    <BoilerCarousel />
                </div>

                <div className={styles.texts}>
                    <div>
                        <h2 className={styles.title}>ცენტრალური გთბობა <span>+</span>   <span>  უფასო მონტაჟი</span></h2>
                        <p className={styles.paragraph}>უმაღლესი ხარისხის გათბობის ქვაბი თურქეთიდან იდეალური საშუალო  ზომის ბინებისთვის, ენერგოეფექტური და გრძელვადიანი</p>
                    </div>

                    <div className={styles.widgetwrap}>
                        <QualityPresentationWidget
                            icon="/sheald.png"
                            title="5 წლიანი გარანტია"
                            description="სრული გარანტია მწარმოებლისგან"
                        />

                        <QualityPresentationWidget
                            icon="/ectroo.png"
                            title="ენერგოეფექტურობა"
                            description="დაზოგეთ გათბობის ხარჯები"
                        />

                        <QualityPresentationWidget
                            icon="/truck2.png"
                            title="უფასო მიწოდება"
                            description="მთელი საქართველოს მასშტაბით"
                        />
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.order}>შეუკვეთე ახლა</button>
                        <CallButton
                            className={styles.call}
                            number="+995599123456">
                            დარეკვა

                        </CallButton>
                    </div>
                </div>
            </div>


        </section>
    )
}


export default QualityPresentation