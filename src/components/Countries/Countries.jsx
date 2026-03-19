import { navigate } from "vike/client/router";
import styles from "./Countries.module.css";

const countries = [
  { name: "turkey", src: "/turkey.png", alt: 'თურქეთის გათბობის სისტემები' },
  { name: "italy", src: "/italy.png", alt: "იტალიური გათბობის ქვაბები" },
  { name: "china", src: "/china.png", alt: "ჩინური რადიატორები" },
];
const Countries = () => {
  const handleClick = (country) => {
    navigate(`/inventory/${country}`);
  };

  return (
    <section>
      <h2>მწარმოებელი ქვეყნები</h2>
      <p>ჩვენ ვმუშაობთ თურქული, იტალიური და ჩინური გათბობის სისტემების
        მწარმოებლებთან, რაც გვაძლევს შესაძლებლობას შევთავაზოთ მომხმარებელს
        საუკეთესო ხარისხისა და ფასის ბალანსი.</p>

      <div className={styles.Countries}>
        {countries.map((c) => (
          <img
            key={c.name}
            src={c.src}
            alt={c.name}
            className={styles.image}
            onClick={() => handleClick(c.name)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </section>
  );
};

export default Countries;
