import HeroList from "../../hero/HeroLink";

const MarvelScreen = () => {
  return (
    <div>
      <h1>MarvelScreen</h1>
      <hr />

      <HeroList publisher="Marvel Comics" limit={100} />
    </div>
  );
};

export default MarvelScreen;
