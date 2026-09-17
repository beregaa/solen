import Counter from '../Counter/Counter'
import styles from './WhyUs.module.css'

const reasons = [
    { icon: '/grouppng.svg', title: 'პროფესიონალი გუნდი', text: 'ჩვენთან დასაქმებულები არიან გამოცდილი სპეციალისტები, რომლებიც სამუშაოს ასრულებენ ზუსტად და ხარისხიანად.' },
    { icon: '/timer.svg', title: 'სწრაფი მომსახურება', text: 'სწრაფი მონტაჟი და სერვისი — ჩვენ ვაფასებთ თქვენს დროს.' },
    { icon: '/dolar.svg', title: 'ბიუჯეტური ფასები', text: 'უმაღლესი ხარისხის ტექნიკა და მომსახურება ხელმისაწვდომ ფასად. გამჭვირვალე ტარიფები, ფარული ხარჯების გარეშე.' },
    { icon: '/quality.svg', title: 'ხარისხის გარანტია', text: 'ვთანამშრომლობთ მხოლოდ საიმედო მომწოდებლებთან და გაძლევთ გრძელვადიან გარანტიას ყველა პროდუქტსა და ნამუშევარზე.' },
    { icon: '/headset.svg', title: '24/7 მხარდაჭერა', text: 'ჩვენ თქვენს გვერდით ვართ მონტაჟის შემდეგაც — ნებისმიერი ტექნიკური საკითხის მოსაგვარებლად.' },
    { icon: '/individual.svg', title: 'ინდივიდუალური მიდგომა', text: 'თითოეულ კლიენტთან ვმუშაობთ მისი საჭიროებებისა და მოთხოვნების გათვალისწინებით.' },
]

const stats = [
    { target: 500, suffix: '+', label: 'დამონტაჟებული სისტემა' },
    { target: 100, suffix: '%', label: 'კმაყოფილი კლიენტი' },
    { target: 5, suffix: '+', label: 'წლის გამოცდილება' },
    { target: 24, suffix: '/7', label: 'ხელმისაწვდომობა' },
]

export default function WhyUs() {
    return (
        <section className={styles.wrapper} aria-labelledby="why-title">
            <h2 id="why-title" className={styles.title}>რატომ SOLEN?</h2>

            <p className={styles.intro}>
                Solen გთავაზობთ ცენტრალური გათბობის მონტაჟს თბილისში — სწრაფად, ხარისხიანად და ხელმისაწვდომ ფასად.
                ასევე ვახორციელებთ რადიატორებისა და გათბობის სისტემების მონტაჟს საქართველოს მასშტაბით, დიდი შეკვეთებისთვის.
            </p>

            <div className={styles.grid}>
                {reasons.map((r) => (
                    <article key={r.title} className={styles.card}>
                        <img className={styles.image} src={r.icon} alt="" width="52" height="52" loading="lazy" />
                        <div className={styles.text}>
                            <h3>{r.title}</h3>
                            <p>{r.text}</p>
                        </div>
                    </article>
                ))}
            </div>

            <ul className={styles.stats}>
                {stats.map((s) => (
                    <li key={s.label} className={styles.stat}>
                        <Counter target={s.target} suffix={s.suffix} className={styles.statValue} />
                        <span className={styles.statLabel}>{s.label}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
