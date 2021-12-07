// import components
import { useState, useEffect } from "react";

// configure a line text to select items
export default function LineText({ total, setTotal }) {
  const [selected, setSelected] = useState("");
  const [energy, setEnergy] = useState(0);

  const [input, setInput] = useState("");

  const [previous, setPrevious] = useState(0);

  // connection fetch with the api to calculate kilocalories
  useEffect(() => {
    const fetchKcal = async () => {
      if (selected === "") return;
      const response = await fetch(
        `https://world.openfoodfacts.org/api/v0/product/${selected}.json`
      );
      if (response.status === 0) return;
      const product = await response.json();
      setEnergy(product.product.nutriments["energy-kcal_100g"]);
    };
    fetchKcal();
  }, [selected]);

  // condition from the chose of the user
  useEffect(() => {
    if (selected === "") return;
    if (energy === 0) return;
    if (isNaN(input)) setInput(0);

    // calculate the energy value
    let newValue = Math.floor((input / 100) * energy);
    if (isNaN(newValue)) newValue = 0;
    console.log(total, previous, newValue);
    setTotal(total - previous + newValue);
    setPrevious(newValue);
  }, [selected, energy, input]);
  const handleChange = async (e) => {
    setSelected(e.target.value);
    console.log(e.target.value);
  };
  const handleInput = (e) => {
    setInput(parseInt(e.target.value));
  };

  // what we will see on the widget 'Diet and Calories'
  return (
    <div className="textLine">
      <select value={selected} className="selectLine" onChange={handleChange}>
        {/* value input for each items */}
        <option value="">Select an option</option>
        <option value="3228021170039">Camembert</option>
        <option value="5413458017578">Chicken</option>
        <option value="3038359007224">Rice</option>
        <option value="40884004">Salmon</option>
        <option value="8076809545440">Spagetti</option>
        <option value="3560070198504">Sparagus</option>
        <option value="3270160103133">Zucchini</option>
      </select>
      <input type="number" className="inputLine" onChange={handleInput}></input>
      <p className="unity">grams</p>
    </div>
  );
}
