import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  const goBackLoginHandler = () => {
    navigate("/login");
  };
  return (
    <div className="not-found-container">
      <div className="not-found-overlay">
        <h2 className="not-found-title">¡Oops! Página no encontrada</h2>
        <p className="not-found-text">
          Parece que Deadpool ha eliminado esta página. 😆
        </p>
        <Button className="not-found-button" onClick={goBackLoginHandler}>
          Volver a iniciar sesión
        </Button>
      </div>
      <img
        src="../../../public/assets/notFound.jpeg"
        alt="Not Found"
        className="not-found-image"
      />
    </div>
  );
};

export default NotFound;
