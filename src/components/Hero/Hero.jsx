
import CallButton from '../CallButton/CallButton'
import styles from './Hero.module.css'
const Hero = () => {

    return (


        <section className={styles.hero}>
            <div className={styles.heroTextArea}>
                <h1 className={styles.title}> <span>ცენტრალური გათბობა</span> <span className={styles.mark}> თქვენი სახლისთვის</span></h1>

                <p className={styles.paragraph}>უმაღლესი ხარისხის ტექნიკა ,სწრაფი მონტაჟი და ბიუჯეტური ფასები SOLEN - სითბო და სანდოობა თქვენს სახლში, პროფესიონალებისგან</p>

                <div className={styles.callButton}>
                    <div className={styles.consultationButton}> უფასო კონსულტაცია  <img className={styles.arrow} src="/arrow-right-direction-white-icon.webp" alt="" /></div>



                    <CallButton className={styles.telePhone} number="+995599123456">
                        <img className={styles.telephoneIcon} src="/telephoneIcon.png" alt="telephoneIcon" /> 555 12 34 56
                    </CallButton>
                </div>
                <div className={styles.serviceProvides}>
                    <div>
                        <h3 className={styles.year}>
                            5 წელი
                        </h3>
                        <small>გამოცდილება</small>

                    </div>
                    <div>
                        <h3 className={styles.time}
                        >24/7
                        </h3>
                        <small>მხარდაჭერა</small>
                    </div>

                    <div>
                        <h3 className={styles.delivery}>
                            უფასო
                        </h3>
                        <small>მიწოდება</small>
                    </div>

                </div>
            </div>

            <div className={styles.heroImage}>
                <img
                    src="/radiator.webp"
                    alt="Central heating radiator"
                    className={styles.heroImageImg}
                    fetchPriority="high"
                    loading="eager"
                />
                <div className={styles.adverstisment}>
                    <div className={styles.price}>
                        <span>მონტაჟი ფასი იწყება</span>
                        <span className={styles.priceNumber}>150-₾ </span>
                    </div>
                    <img className={styles.buildingicon} src="/buildingicon.png" alt="" />
                </div>
            </div>

        </section>
    )
}


export default Hero