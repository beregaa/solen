import { lazy, Suspense } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Header.module.css'
import CallButton from '../CallButton/CallButton'
import useResponsive from '../../Hooks/useResponsive'

const BurgerMenu = lazy(() => import('../BurgerMenu/BurgerMenu'))

const Header = () => {

    const { isMobile, isTablet } = useResponsive()

    return (

        <header className={styles.header}>
            <div className={styles.headerContent}>

                <Link to="/">
                    <img className={styles.logo} src="/logo.png" alt="Solen Heating Systems Logo" />
                </Link>

                {(isMobile || isTablet) && (
                  <>
                    <CallButton
                      number="+995599123456"
                      className={styles.MobileConsultationButton}
                    >
                      <img className={styles.call} src="/call.png" alt="" />
                    </CallButton>
                    <Suspense fallback={null}>
                      <BurgerMenu />
                    </Suspense>
                  </>
                )}

                {!isMobile && !isTablet && (
                    <nav className={styles.navBar}>
                        <ul className={styles.navBarButtons}>
                            {/* <li>
                                <NavLink to="/services" className={({ isActive }) =>
                                    isActive ? `${styles.link} ${styles.active}` : styles.link
                                }>
                                    სერვისები
                                </NavLink>
                            </li> */}

                            <li>
                                <NavLink to="/inventory/italy" className={({ isActive }) =>
                                    isActive ? `${styles.link} ${styles.active}` : styles.link
                                }>
                                    ინვენტარი
                                </NavLink>
                            </li>

                            {/* <li>
                                <NavLink to="/gallery" className={({ isActive }) =>
                                    isActive ? `${styles.link} ${styles.active}` : styles.link
                                }>
                                    გალერეა
                                </NavLink>
                            </li> */}
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