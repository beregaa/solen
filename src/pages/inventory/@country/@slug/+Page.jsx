import { useData } from 'vike-react/useData'
import inventoryData, { countryNames } from '../../../../data/inventoryData'
import InventoryCard from '../../../../components/InventoryCard/InventoryCard'
import CallButton from '../../../../components/CallButton/CallButton'
import styles from './product.module.css'

const PHONE = '+995568883279'
const fromCountry = { italy: 'იტალიის', turkey: 'თურქეთის', china: 'ჩინეთის' }
const PHONE_LABEL = '568 88 32 79'

export default function ProductPage() {
  const { product: p } = useData()

  const specs = [
    ['სიმძლავრე', p.power && `${p.power} კვტ`],
    ['ტიპი', p.type],
    ['რეკომენდებული ფართი', p.area],
    ['ცხელი წყალი', p.hotWater],
    ['ეფექტურობა', p.efficiency],
    ['გარანტია', p.warranty],
    ['ზომა', p.size],
    ['წარმოება', countryNames[p.country]],
  ].filter(([, v]) => v)

  const similar = inventoryData
    .filter((x) => x.id !== p.id)
    .sort((a, b) => (b.country === p.country) - (a.country === p.country) || Math.abs(a.price - p.price) - Math.abs(b.price - p.price))
    .slice(0, 4)

  return (
    <div className={styles.page}>
      <a className={styles.back} href={`/inventory/${p.country}`}>
        ← {fromCountry[p.country]} ქვაბები
      </a>

      <section className={styles.top}>
        <div className={styles.imageBox}>
          <img className={styles.image} src={p.image} alt={p.name} width="1024" height="1024" fetchPriority="high" />
        </div>

        <div className={styles.summary}>
          <h1 className={styles.name}>{p.name}</h1>

          {p.area && (
            <p className={styles.area}>
              <span className={styles.areaLabel}>გამოდგება</span>
              <strong>{p.area}</strong>
              <span className={styles.areaLabel}>ფართისთვის</span>
            </p>
          )}

          <div className={styles.priceRow}>
            <span className={styles.price}>{p.price} ₾</span>
            <span className={styles.free}>+ უფასო მონტაჟი</span>
          </div>

          {p.description && <p className={styles.description}>{p.description}</p>}

          <div className={styles.actions}>
            <CallButton number={PHONE} className={styles.callPrimary}>
              <img src="/call.svg" alt="" width="20" height="20" className={styles.callIcon} />
              დარეკვა — {PHONE_LABEL}
            </CallButton>
          </div>

          <ul className={styles.perks}>
            <li>უფასო მიწოდება მთელ საქართველოში</li>
            <li>მონტაჟი თბილისსა და რუსთავში</li>
            <li>24/7 მხარდაჭერა</li>
          </ul>
        </div>
      </section>

      {specs.length > 1 && (
        <section className={styles.block}>
          <h2 className={styles.blockTitle}>მახასიათებლები</h2>
          <dl className={styles.specs}>
            {specs.map(([k, v]) => (
              <div key={k} className={styles.spec}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {(p.pros.length > 0 || p.cons.length > 0) && (
        <section className={styles.block}>
          <h2 className={styles.blockTitle}>დადებითი და უარყოფითი მხარეები</h2>
          <div className={styles.proscons}>
            {p.pros.length > 0 && (
              <div className={`${styles.list} ${styles.pros}`}>
                <h3>დადებითი</h3>
                <ul>
                  {p.pros.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            )}
            {p.cons.length > 0 && (
              <div className={`${styles.list} ${styles.cons}`}>
                <h3>გასათვალისწინებელი</h3>
                <ul>
                  {p.cons.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <section className={styles.consult}>
        <div>
          <h2 className={styles.consultTitle}>არ იცით, ეს ქვაბი გამოგადგებათ თუ არა?</h2>
          <p className={styles.consultText}>
            ქვაბის შერჩევა დამოკიდებულია ფართზე, ჭერის სიმაღლესა და ბინის იზოლაციაზე.
            დარეკეთ უფრო ღრმა კონსულტაციისთვის — შეგირჩევთ თქვენს ბინას მორგებულ ვარიანტს.
          </p>
        </div>
        <CallButton number={PHONE} className={styles.consultButton}>
          დარეკვა — {PHONE_LABEL}
        </CallButton>
      </section>

      {similar.length > 0 && (
        <section className={styles.block}>
          <h2 className={styles.blockTitle}>მსგავსი ქვაბები</h2>
          <div className={styles.similar}>
            {similar.map((x) => (
              <InventoryCard key={x.id} product={x} />
            ))}
          </div>
        </section>
      )}

      {/* phones: call button always within reach */}
      <div className={styles.stickyBar}>
        <div className={styles.stickyPrice}>
          <span>{p.price} ₾</span>
          <small>+ უფასო მონტაჟი</small>
        </div>
        <CallButton number={PHONE} className={styles.stickyCall}>
          <img src="/call.svg" alt="" width="18" height="18" className={styles.callIcon} />
          დარეკვა
        </CallButton>
      </div>
    </div>
  )
}
