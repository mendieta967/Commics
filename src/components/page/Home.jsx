import { useEffect, useState } from "react";
import getHeroes from "../../selectors/getHeroes"; // función que llama a la API y devuelve todos los héroes
import HeroCard from "../hero/HeroCard";
import "../hero/Hero.css";

const Home = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroes = async () => {
      const allHeroes = await getHeroes();
      console.log("Héroes cargados:", allHeroes); // 👈 esto debería mostrar un array de héroes
      setHeroes(allHeroes);
      setLoading(false);
    };

    fetchHeroes();
  }, []);

  return (
    <div className="container mt-3">
      <h1 className="text-center">Todos los Superhéroes</h1>
      <hr />
      {loading ? (
        <p className="text-center">Cargando héroes...</p>
      ) : (
        <div className="row">
          {heroes.map((hero) => (
            <div key={hero.id} className="col-md-3 mb-4">
              <HeroCard {...hero} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
