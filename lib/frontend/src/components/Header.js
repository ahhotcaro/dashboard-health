import glass from "../assets/glass.jpg";
import bell from "../assets/bell.jpg";

const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();
const date = new Date(Date.UTC(currentYear, currentMonth, currentDay));
const currentDate = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(date);

export default function Header({ title = "John’s Dashboard Overview" }) {
  return (
    <div className="header">
      <div className="mainTitle">
        <h1 className="title">{title}</h1>
        <p className="date">{currentDate}</p>
      </div>

      <div className="side">
        <img
          className="upRight"
          src={glass}
          alt="glass"
          width="24px"
          height="24px"
        />
        <img
          className="upRight"
          src={bell}
          alt="bell"
          width="24px"
          height="24px"
        />
      </div>
    </div>
  );
}
