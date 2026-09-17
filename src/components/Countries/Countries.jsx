import styles from "./Countries.module.css";

const countries = [
  { name: "turkey", label: "თურქეთი", src: "/turkey.png" },
  { name: "italy", label: "იტალია", src: "/italy.png" },
  { name: "china", label: "ჩინეთი", src: "/china.png" },
];

const Countries = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>მწარმოებელი ქვეყნები</h2>
      <p className={styles.paragraph}>
        ვმუშაობთ თურქული, იტალიური და ჩინური გათბობის სისტემების მწარმოებლებთან —
        ასე გთავაზობთ ხარისხისა და ფასის საუკეთესო ბალანსს.
      </p>

      <ul className={styles.countries}>
        {countries.map((c) => (
          <li key={c.name}>
            <a className={styles.country} href={`/inventory/${c.name}`}>
              <img className={styles.flag} src={c.src} alt="" width="396" height="264" loading="lazy" />
              <span className={styles.label}>{c.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Countries;
