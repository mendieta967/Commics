import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { UseForm } from "../../../hooks/useForm";
import { getHeroesByName } from "../../../selectors/getHeroesByName";
import HeroCard from "../../hero/HeroCard";
import "./SearchScreen.css";

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = UseForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFileted = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Búsquedas</h1>
      <hr />
      <div className="container-form">
        <div className="search-form-container">
          <h4 className="search-title">Buscar</h4>
          <hr />
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Buscar un héroe"
              className="form-control search-input"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button className="btn btn-search" type="submit">
              Buscar...
            </button>
          </form>
        </div>
      </div>
      <hr />
      <h1>Resultados</h1>
      <hr />
      <div className="container-SearchScreen">
        <div className="search-results">
          {q === "" ? (
            <div className="alert alert-info custom-alert">Buscar un héroe</div>
          ) : (
            heroesFileted.length === 0 && (
              <div className="alert alert-danger custom-alert">
                No hay resultados: <strong>{q}</strong>
              </div>
            )
          )}

          {heroesFileted.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
