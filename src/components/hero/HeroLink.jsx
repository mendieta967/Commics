import { useMemo } from "react";
import "./Hero.css";
import HeroCard from "./HeroCard";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher.jsx";

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="hero-card-container">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
export default HeroList;
