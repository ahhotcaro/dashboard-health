import {useEffect, useState} from 'react'
// Style && assets
import "../styles/Dashboard.css";
import glass from "../assets/glass.jpg";
import bell from "../assets/bell.jpg";
import foodIcon from "../assets/foodIcon.jpg";
import food from "../assets/food.jpg";
import sleepIcon from "../assets/sleepIcon.jpg";
import timeIcon from "../assets/timeIcon.jpg";
import activityIcon from "../assets/activityIcon.jpg";
import tipsIcon from "../assets/tipsIcon.jpg";

// Components
import Navbar from "./Navbar";
import RightFrame from "./RightFrame";

function Dashboard() {
  const [randomQuote, setRandomQuote] = useState({})
  useEffect(() => {
    const fetchRandomQuote = async () => {
      const res = await fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      const data = await res.json();
      const newRandomQuote = {
        quoteAuthor: data.data[0].quoteAuthor,
        quoteGenre: data.data[0].quoteGenre,
        quoteText: data.data[0].quoteText,
      }
      setRandomQuote(newRandomQuote)
    }
    fetchRandomQuote()
  }, [])


  const title = "John’s Dashboard Overview";
  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const date = new Date(Date.UTC(currentYear, currentMonth, currentDay));
  const currentDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return (
    <div className="dashboard">
      <div className="centerFrame">
        <h1 className="title">{title}</h1>
        <p className="date">{currentDate}</p>

        <div className="research">
          <img src={glass} alt="glass" width="24px" height="24px" />
        </div>
        <div className="notifications">
          <img src={bell} alt="bell" width="24px" height="24px" />
        </div>

        <div className="foodSuggestions">
          <img src={foodIcon} alt="food icon" className="foodIcon" />
          <h3 className="foodTitle">Food Sugestions</h3>
          <img src={food} alt="food" className="food" />
        </div>

        <div className="sleepQuality">
          <img src={sleepIcon} alt="sleep icon" className="sleepIcon" />
          <h3 className="sleepTitle">Sleep Quality</h3>
          <p className="data">76%</p>
          <p className="sleepAverage">Average</p>
          <div className="sleepFromLastWeek">
            <p className="subtitle">From last week</p>
          </div>
        </div>

        <div className="timeToBed">
          <img src={timeIcon} alt="time icon" className="timeIcon" />
          <h3 className="timeTitle">Time in Bed</h3>
          <p className="data">7:05</p>
          <p className="timeAverage">Average</p>
          <div className="timeFromLastWeek">
            <p className="subtitle">From last week</p>
          </div>
        </div>

        <div className="activityGrowth">
          <img
            src={activityIcon}
            alt="activity icon"
            className="activityIcon"
          />
          <h3 className="activityTitle">Activity Growth</h3>
        </div>

        <div className="tipsAndMotivation">
          <img src={tipsIcon} alt="tips icon" className="tipsIcon" />
          <h3 className="tipsTitle">Tips and Motivation</h3>
          <div className="theme">
            <p className="themeName">{randomQuote?.quoteGenre && randomQuote.quoteGenre}</p>
            <p>{randomQuote?.quoteAuthor && randomQuote.quoteAuthor}</p>
            <p>{randomQuote?.quoteText && randomQuote.quoteText}</p>
          </div>
        </div>
      </div>
      <RightFrame />
      <Navbar />
    </div>
  );
}

export default Dashboard;
