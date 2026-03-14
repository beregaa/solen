import { useNavigate } from "react-router-dom";
import styles from "./Countries.module.css";

const countries = [
  { name: "turkey", src: "/turkey.png" },
  { name: "italy", src: "/italy.png" },
  { name: "china", src: "/china.png" },
];
const Countries = () => {
  const navigate = useNavigate();

  const handleClick = (country) => {
    navigate(`/inventory/${country}`);
  };

  return (
    <section>
      <h2>მწარმოებელი ქვეყნები</h2>

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
