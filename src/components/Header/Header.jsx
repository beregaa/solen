import { lazy, Suspense } from 'react'
import { usePageContext } from 'vike-react/usePageContext'
import { ClientOnly } from 'vike-react/ClientOnly'
import styles from './Header.module.css'
import CallButton from '../CallButton/CallButton'

const BurgerMenu = lazy(() => import('../BurgerMenu/BurgerMenu'))

const Header = () => {
  const { urlPathname } = usePageContext()

  const linkClass = (active) => (active ? `${styles.link} ${styles.active}` : styles.link)

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <a href="/" className={styles.logoLink} aria-label="Solen — მთავარი">
          <img className={styles.logo} src="/logo-trim.webp" alt="Solen" width="521" height="148" />
        </a>

        {/* Desktop — hidden on ≤1024px with CSS (no layout jump after load) */}
        <nav className={styles.navBar} aria-label="მთავარი მენიუ">
          <ul className={styles.navBarButtons}>
            <li>
              <a href="/inventory/italy" className={linkClass(urlPathname?.startsWith('/inventory'))}>
                ინვენტარი
              </a>
            </li>
            <li>
              <a href="/gallery" className={linkClass(urlPathname === '/gallery')}>
                გალერეა
              </a>
            </li>
          </ul>

          <CallButton number="+995568883279" className={styles.consultationButton}>
            უფასო კონსულტაცია
          </CallButton>
        </nav>

        {/* Mobile / tablet */}
        <div className={styles.mobileActions}>
          <CallButton number="+995568883279" className={styles.mobileCall} ariaLabel="დარეკვა">
            <img className={styles.call} src="/call.svg" alt="" width="20" height="20" />
          </CallButton>
          <ClientOnly fallback={<span className={styles.burgerPlaceholder} />}>
            <Suspense fallback={<span className={styles.burgerPlaceholder} />}>
              <BurgerMenu />
            </Suspense>
          </ClientOnly>
        </div>
      </div>
    </header>
  )
}

export default Header
