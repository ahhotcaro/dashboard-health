export default function LineText() {
  return (
    <div className="textLine">
      <input type="number" className="inputLine"></input>
      <p className="unity">grams</p>
      <select className="selectLine">
          <option value="">Please select an option</option>
          <option value="rice">Rice</option>
          <option value="chicken">Chicken</option>
          <option value="sparagus">Sparagus</option>
          <option value="zucchini">Zucchini</option>
      </select>
    </div>
  );
}
