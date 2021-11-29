import glass from "../assets/glass.jpg";
import bell from "../assets/bell.jpg";

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

export default function Header() {
    
    return (
        <div className="header">
            
            <div className="mainTitle">
                <h1 className="title">{title}</h1>
            <p className="date">{currentDate}</p>
            </div>
        
            <div className="research">
                <img src={glass} alt="glass" width="24px" height="24px" />
                </div>
                <div className="notifications">
                <img src={bell} alt="bell" width="24px" height="24px" />
            </div> 
        </div>
 
    ); 
  }
  