// Components
import LineText from "./LineText";
import RightCard from "./RightCard";

//right frame
import dietIcon from "../assets/dietIcon.jpg";
import manBody from "../assets/manBody.jpg";

import { useState } from "react";

export default function RightFrame(props) {
  const [total_kcal, setTotal_kcal] = useState(0);
  return (
    <div className="rightFrame">
      <RightCard
        className="right"
        icone={dietIcon}
        alternative="diet icon"
        titre="Diet and Calories"
      >
        <div className="mealGrams">
          <div className="textLineWrapper">
            <LineText total={total_kcal} setTotal={setTotal_kcal} />
            <LineText total={total_kcal} setTotal={setTotal_kcal} />
            <LineText total={total_kcal} setTotal={setTotal_kcal} />
            <LineText total={total_kcal} setTotal={setTotal_kcal} />
          </div>
        </div>
      </RightCard>

      <div className="food">
        <p>Your meal represents</p>
        <p className="impData">{total_kcal}</p>
        <p>Kilocalories</p>
        <img className="mansBody" src={manBody} alternative="manBody"/>
      </div>
      
        
     
    </div>
  );
}
