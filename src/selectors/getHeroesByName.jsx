import { heroes } from "../data/InfoHereos";

export const getHeroesByName = (name = "") => {
  console.log("getHeroesByName called", name);

  if (!Array.isArray(heroes) || heroes.length === 0) {
    console.error("Error: La lista de héroes no está cargada correctamente");
    return [];
  }

  if (name.trim().length === 0) {
    return [];
  }

  name = name.toLowerCase();
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
