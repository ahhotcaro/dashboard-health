import dietIcon from "../assets/dietIcon.jpg";
import manBody from "../assets/manBody.jpg";
// import BMIscale from "../assets/BMIscale.jpg";

// Components
import LineText from "./LineText";
import Card from "./Card";

export default function RightFrame(props) {
  return (
    <div className="rightFrame">
      <Card icone={dietIcon} alternative="diet icon" titre="Diet and Calories"/>
      <div className="textLineWrapper">
        <LineText />
        <LineText />
        <LineText />
        <LineText />
      </div>
      <img src={manBody} alt="man body" className="manBody" />
      {/* <p className="meal">Your meal represents</p>
      <p className="kcal">Kilocalories</p>
      <div className="sectionLine">
        <h3 className="BMICalculator">BMI Calculator</h3>
        <p className="dateCheck">Last checked 2 days ago</p>
        <div className="height">
          <p className="heightTitle">Height</p>
        </div>
        <div className="weight">
          <p className="weightTitle">Weight</p>
        </div>
        <div className="BMI">
          <p className="BMITitle">Body Mass Index (BMI)</p>
          <div className="healthState"></div>
          <img src={BMIscale} alt="BMI scale" className="BMIscale" />
        </div>
        
      </div> */}
    </div>
  );
}
