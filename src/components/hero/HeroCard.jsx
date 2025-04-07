import { Link } from "react-router-dom";
import "./Hero.css";

const HeroCard = ({ id, name, images = {}, biography = {} }) => {
  const imagePath =
    images.lg || images.md || images.sm || "/assets/no-image.jpg";

  return (
    <div className="card animate__animated animate__fadeIn">
      <div className="card-img">
        <img src={imagePath} className="card-img-top" alt={name} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>
          <strong>Nombre real:</strong> {biography.fullName}
        </p>
        <p>
          <strong>Primera aparición:</strong> {biography.firstAppearance}
        </p>
      </div>
      <div className="card-footer">
        <Link to={`/hero/${id}`} className="btn btn-primary btn-sm w-100">
          Más...
        </Link>
      </div>
    </div>
  );
};

export default HeroCard;
