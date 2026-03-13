

import styles from './Footer.module.css'



const Footer = ({ number, children, className }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>

                <div className={styles.footerCol}>
                    <img src="/logo.png" className={styles.logo} alt="logo" />
                    <p className={styles.desc}>
                        ცენტრალური გათბობის სისტემების მონტაჟი, დიაგნოსტიკა და შეკეთება.
                    </p>

                    <div className={styles.socials}>
                        <div className={styles.socialIcon}> <a target="_blank" href="https://www.facebook.com/profile.php?id=100085867923367"> f </a></div>
                        <div className={styles.socialIcon}>i</div>
                        <div className={styles.socialIcon}>w</div>
                    </div>
                </div>

                <div className={styles.footerCol}>
                    <h4>სწრაფი ბმულები</h4>
                    <a>მთავარი</a>
                    <a>ჩვენ შესახებ</a>
                    <a>სერვისები</a>
                    <a>პროდუქცია</a>
                    <a>კონტაქტი</a>
                </div>

                <div className={styles.footerCol}>
                    <h4>სერვისები</h4>
                    <p>✔ გათბობის მონტაჟი</p>
                    <p>✔ დიაგნოსტიკა</p>
                    <p>✔ ქვაბის შეკეთება</p>
                    <p>✔ რადიატორების მონტაჟი</p>
                </div>

                <div className={styles.footerCol}>
                    <h4>კონტაქტი</h4>
                    <p>📞 568 88 32 79</p>
                    <p>📍 თბილისი</p>
                    <p>🟢 24/7 მომსახურება</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer