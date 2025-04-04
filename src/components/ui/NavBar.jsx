import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./NavBar.css";

const NavBar = () => {
  const { handleLogaut } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">
      {/* Título de la Navbar */}
      <Link className="navbar-brand text-uppercase fw-bold" to="/">
        Asociaciones
      </Link>

      {/* Sección de enlaces centrados */}
      <div className="navbar-collapse justify-content-start">
        <div className="navbar-nav gap-3">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${
                isActive ? "text-warning fw-bold" : "text-light"
              }`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${
                isActive ? "text-warning fw-bold" : "text-light"
              }`
            }
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${
                isActive ? "text-warning fw-bold" : "text-light"
              }`
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      {/* Botón Logout en la esquina superior derecha */}
      <div className="d-flex align-items-center gap-3">
        <span className="nav-item nav-link text-info fw-bold">
          {localStorage.getItem("loggedUser")?.replaceAll('"', "") ||
            "Invitado"}
        </span>
        <button
          type="button"
          className="btn btn-danger fw-bold px-3 shadow-sm transition"
          onClick={() => {
            handleLogaut();
            navigate("/login");
          }}
        >
          Cerrar Sesion
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
