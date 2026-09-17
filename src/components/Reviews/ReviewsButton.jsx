import { useRef } from 'react'
import reviewsData, { FACEBOOK_REVIEWS_URL } from '../../data/reviewsData'
import styles from './Reviews.module.css'

const formatDate = (d) => {
  const [y, m] = d.split('-')
  const months = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი']
  return `${months[Number(m) - 1]} ${y}`
}

/**
 * Drop <ReviewsButton /> anywhere. Optional props:
 *   label      — button text
 *   className  — to restyle the button for a specific place
 */
export default function ReviewsButton({ label, className }) {
  const dialogRef = useRef(null)
  const reviews = [...reviewsData].sort((a, b) => b.date.localeCompare(a.date))
  const count = reviews.length

  const open = () => dialogRef.current?.showModal()
  const close = () => dialogRef.current?.close()

  // click on the dark backdrop closes the dialog
  const onBackdrop = (e) => {
    if (e.target === dialogRef.current) close()
  }

  return (
    <>
      <button type="button" className={className || styles.button} onClick={open}>
        <img src="/facebook.png" alt="" width="20" height="20" />
        {label || (count ? `კლიენტების შეფასებები (${count})` : 'კლიენტების შეფასებები')}
      </button>

      {/* The list is rendered into the HTML even while closed,
          so Google and AI crawlers can read the real reviews. */}
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        onClick={onBackdrop}
        aria-labelledby="reviews-title"
      >
        <div className={styles.panel}>
          <header className={styles.head}>
            <div>
              <h2 id="reviews-title" className={styles.title}>კლიენტების შეფასებები</h2>
              <p className={styles.sub}>რეალური შეფასებები SOLEN-ის Facebook გვერდიდან</p>
            </div>
            <button type="button" className={styles.close} onClick={close} aria-label="დახურვა">
              ×
            </button>
          </header>

          {count === 0 ? (
            <p className={styles.empty}>შეფასებები მალე დაემატება.</p>
          ) : (
            <ul className={styles.list}>
              {reviews.map((r) => (
                <li key={`${r.name}-${r.date}`} className={styles.item}>
                  <div className={styles.itemHead}>
                    {r.avatar ? (
                      <img className={styles.avatar} src={r.avatar} alt="" width="40" height="40" loading="lazy" />
                    ) : (
                      <span className={styles.avatar} aria-hidden="true">{r.name.charAt(0)}</span>
                    )}
                    <div className={styles.meta}>
                      <span className={styles.name}>{r.name}</span>
                      <span className={styles.date}>
                        {r.recommends && <span className={styles.badge}>გვირჩევს</span>}
                        <time dateTime={r.date}>{formatDate(r.date)}</time>
                      </span>
                    </div>
                  </div>
                  <p className={styles.text}>{r.text}</p>
                  {r.url && (
                    <a className={styles.source} href={r.url} target="_blank" rel="noopener noreferrer">
                      ნახეთ Facebook-ზე
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}

          <a className={styles.all} href={FACEBOOK_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
            ყველა შეფასება Facebook-ზე
          </a>
        </div>
      </dialog>
    </>
  )
}
