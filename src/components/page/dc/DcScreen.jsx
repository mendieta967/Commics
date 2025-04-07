import HeroList from "../../hero/HeroLink";
import "./DcScreen.css";

const DcScreen = () => {
  return (
    <div className="Container-DcScreen">
      <h1>DCScreen</h1>
      <hr />
      <HeroList publisher="DC Comics" limit={100} />
    </div>
  );
};

export default DcScreen;
