// Components
import LineText from "./LineText";
import RightCard from './RightCard';


//right frame
import dietIcon from "../assets/dietIcon.jpg";
import manBody from "../assets/manBody.jpg";


export default function RightFrame(props) {
    return (
      <div className="rightFrame">
        <RightCard className="right" icone={dietIcon} alternative="diet icon" titre="Diet and Calories">
          
          <div className="mealGrams">
            <div className="textLineWrapper">
            <LineText />
            <LineText />
            <LineText />
            <LineText /> 
            <button className="button">Calculate</button>
            </div>
          
          </div>
        </RightCard>
          <div className="food">
             
              <p>Your meal represents</p>
              <p>1600</p>
              <p>Kilocalories</p>
          </div>
      </div>
    );
  }