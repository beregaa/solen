import { lazy, Suspense } from 'react'
import { usePageContext } from 'vike-react/usePageContext'
import { ClientOnly } from 'vike-react/ClientOnly'
import styles from './Header.module.css'
import CallButton from '../CallButton/CallButton'
import useResponsive from '../../Hooks/useResponsive'

const BurgerMenu = lazy(() => import('../BurgerMenu/BurgerMenu'))

const Header = () => {
  const { isMobile, isTablet } = useResponsive()
  const { urlPathname } = usePageContext()

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <a href="/">
          <img className={styles.logo} src="/logo.webp" alt="Solen Heating Systems Logo" />
        </a>

        {(isMobile || isTablet) && (
          <>
            <CallButton
              number="+995599123456"
              className={styles.MobileConsultationButton}
            >
              <img className={styles.call} src="/call.svg" alt="" />
            </CallButton>
            <ClientOnly fallback={null}>
              <Suspense fallback={null}>
                <BurgerMenu />
              </Suspense>
            </ClientOnly>
          </>
        )}

        {!isMobile && !isTablet && (
          <nav className={styles.navBar}>
            <ul className={styles.navBarButtons}>
              <li>
                <a
                  href="/inventory/italy"
                  className={urlPathname?.startsWith('/inventory') ? `${styles.link} ${styles.active}` : styles.link}
                >
                  ინვენტარი
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className={urlPathname === '/gallery' ? `${styles.link} ${styles.active}` : styles.link}
                >
                  გალერეა
                </a>
              </li>
            </ul>

            <CallButton
              number="+995599123456"
              className={styles.consultationButton}
            >
              უფასო კონსულტაცია
            </CallButton>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header