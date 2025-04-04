import { Link } from "react-router-dom";
import "./Hero.css";

const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imagePath = `/assets/${id}.jpg`;

  return (
    <div className="animate__animated">
      <div className="card">
        <div className="card-img">
          <img src={imagePath} className="card-img-top" alt={superhero} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{alter_ego}</p>

          {alter_ego !== characters && (
            <p className="text-muted">{characters}</p>
          )}
          <p className="card-text">
            <small className="text-muted">{first_appearance}</small>
          </p>
        </div>
        <div className="card-footer">
          <Link to={`/hero/${id}`} className="button">
            Más...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
