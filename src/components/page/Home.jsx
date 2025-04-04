import { heroes } from "../../data/InfoHereos";
import HeroCard from "../hero/HeroCard";
import "../hero/Hero.css";

const Home = () => {
  return (
    <div>
      <h1>SuperHeroes</h1>
      <hr />
      <div className="hero-card-container">
        {heroes.map((hero) => (
          <div key={hero.id} className="col">
            <HeroCard {...hero} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
