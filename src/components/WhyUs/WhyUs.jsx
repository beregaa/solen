import Counter from '../Counter/Counter'
import styles from './WhyUs.module.css'

export default function WhyUs() {
    return (
        <section className={styles.wrapper} aria-label="რატომ Solen">

            <h2 className={styles.title}>რატომ SOLEN?</h2>

            <p className={styles.intro}>
                Solen გთავაზობთ ცენტრალური გათბობის მონტაჟს თბილისში — სწრაფად, ხარისხიანად და ხელმისაწვდომ ფასად.
                ჩვენ ორიენტირებული ვართ თქვენს კომფორტზე და ნებისმიერი სირთულის გათბობის სისტემის პრობლემის გადაჭრაზე.
                ასევე ვახორციელებთ რადიატორებისა და გათბობის სისტემების მონტაჟს საქართველოს მასშტაბით დიდი შეკვეთებისთვის.
            </p>

            <div className={styles.grid}>

                <article className={styles.card}>
                    <img className={styles.image} src="./grouppng.svg" alt="პროფესიონალი გათბობის მონტაჟის გუნდი Solen" />
                    <div className={styles.text}>
                        <h3>პროფესიონალი გუნდი</h3>
                        <p>
                            ჩვენთან დასაქმებულები არიან გამოცდილი სპეციალისტები, რომლებიც სამუშაოს ასრულებენ ზუსტად და ხარისხიანად.
                        </p>
                    </div>
                </article>

                <article className={styles.card}>
                    <img className={styles.image} src="./timer.svg" alt="სწრაფი გათბობის სერვისი თბილისში" />
                    <div className={styles.text}>
                        <h3>სწრაფი მომსახურება</h3>
                        <p>
                            სწრაფი მონტაჟი და სერვისი — ჩვენ ვაფასებთ თქვენს დროს.
                        </p>
                    </div>
                </article>

                <article className={styles.card}>
                    <img className={styles.image} src="./dolar.svg" alt="ბიუჯეტური გათბობის მონტაჟის ფასები" />
                    <div className={styles.text}>
                        <h3>ბიუჯეტური ფასები</h3>
                        <p>
                            უმაღლესი ხარისხის ტექნიკა და მომსახურება ხელმისაწვდომ ფასად. გამჭვირვალე ტარიფები ფარული ხარჯების გარეშე.
                        </p>
                    </div>
                </article>

                <article className={styles.card}>
                    <img className={styles.image} src="./quality.svg" alt="ხარისხის გარანტია გათბობის სისტემებზე" />
                    <div className={styles.text}>
                        <h3>დოკუმენტირებული ხარისხის გარანტია</h3>
                        <p>
                            ვთანამშრომლობთ მხოლოდ საიმედო მომწოდებლებთან და გაძლევთ გრძელვადიან გარანტიას ყველა პროდუქტსა და ნამუშევარზე.
                        </p>
                    </div>
                </article>

                <article className={styles.card}>
                    <img className={styles.image} src="./headset.svg" alt="24/7 ტექნიკური მხარდაჭერა Solen" />
                    <div className={styles.text}>
                        <h3>24/7 მხარდაჭერა</h3>
                        <p>
                            ჩვენ თქვენს გვერდით ვართ მონტაჟის შემდეგაც. მუდმივი მზადყოფნა ნებისმიერი ტექნიკური საკითხის მოსაგვარებლად.
                        </p>
                    </div>
                </article>

                <article className={styles.card}>
                    <img className={styles.image} src="./individual.svg" alt="ინდივიდუალური მიდგომა გათბობის მონტაჟში" />
                    <div className={styles.text}>
                        <h3>ინდივიდუალური მიდგომა</h3>
                        <p>
                            თითოეულ კლიენტთან ვმუშაობთ მათი სპეციფიკური საჭიროებებისა და მოთხოვნების გათვალისწინებით.
                        </p>
                    </div>
                </article>

            </div>

            <div className={styles.stats}>

                <div>
                    <h4><Counter target={500} suffix="+" color='#037AD1' /></h4>
                    <p>დამონტაჟებული სისტემა</p>
                </div>

                <div>
                    <h4><Counter target={100} suffix="%" color='#FE6B5D' /></h4>
                    <p>კმაყოფილი კლიენტი</p>
                </div>

                <div>
                    <h4><Counter target={5} suffix="+" color='#61B1A3' /></h4>
                    <p>წლის გამოცდილება</p>
                </div>

                <div>
                    <h4><Counter target={24} suffix="/7" color="#61B1A4" /></h4>
                    <p>ხელმისაწვდომობა</p>
                </div>

            </div>

        </section>
    )
}