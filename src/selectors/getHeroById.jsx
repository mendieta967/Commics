import { heroes } from "../data/InfoHereos";

const getHeroById = (id = "") => {
  console.log("getHeroById called");
  return heroes.find((hero) => hero.id === id);
};

export default getHeroById;
