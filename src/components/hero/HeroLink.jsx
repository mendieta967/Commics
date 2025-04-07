import { useEffect, useState } from "react";
import "./Hero.css";
import HeroCard from "./HeroCard";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher.jsx";

const HeroList = ({ publisher, limit = 230 }) => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroes = async () => {
      setLoading(true);
      try {
        const data = await getHeroesByPublisher(publisher, limit);
        setHeroes(data);
      } catch (error) {
        console.error("Error al cargar héroes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, [publisher, limit]);

  if (loading) return <p>Cargando héroes de {publisher}...</p>;

  return (
    <div className="hero-card-container">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

export default HeroList;
