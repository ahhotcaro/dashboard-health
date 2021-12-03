export default function LineText() {
  return (
    <div className="textLine">
      <select className="selectLine">
          <option value="">Select an option</option>
          <option value="rice">Rice</option>
          <option value="chicken">Chicken</option>
          <option value="sparagus">Sparagus</option>
          <option value="zucchini">Zucchini</option>
      </select>
      <input type="number" className="inputLine"></input>
      <p className="unity">grams</p>
    </div>
  );
}
