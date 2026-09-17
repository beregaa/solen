import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerCol}>
                    <img src="/logo-trim.webp" className={styles.logo} alt="Solen" width="521" height="148" loading="lazy" />
                    <p className={styles.desc}>
                        ცენტრალური გათბობის სისტემების მონტაჟი, დიაგნოსტიკა და შეკეთება.
                    </p>
                    <a
                        className={styles.social}
                        href="https://www.facebook.com/profile.php?id=100085867923367"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/facebook.png" alt="" width="20" height="20" loading="lazy" />
                        Facebook
                    </a>
                </div>

                <nav className={styles.footerCol} aria-label="სწრაფი ბმულები">
                    <h4>სწრაფი ბმულები</h4>
                    <a href="/">მთავარი</a>
                    <a href="/inventory/italy">პროდუქცია</a>
                    <a href="/gallery">გალერეა</a>
                </nav>

                <div className={styles.footerCol}>
                    <h4>სერვისები</h4>
                    <p>გათბობის მონტაჟი</p>
                    <p>დიაგნოსტიკა</p>
                    <p>ქვაბის შეკეთება</p>
                    <p>რადიატორების მონტაჟი</p>
                </div>

                <div className={styles.footerCol}>
                    <h4>კონტაქტი</h4>
                    <a href="tel:+995568883279" className={styles.phone}>568 88 32 79</a>
                    <p>თბილისი</p>
                    <p>24/7 მომსახურება</p>
                </div>
            </div>

            <p className={styles.copy}>© {new Date().getFullYear()} Solen</p>
        </footer>
    )
}

export default Footer
