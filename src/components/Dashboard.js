// Style && assets
import "../styles/Dashboard2.css";

// Components
import Navbar from "./Navbar";
import RightFrame from "./RightFrame";
import CenterFrame from "./CenterFrame";

function Dashboard() {

  return (

    <div className="dashboard">
      
      <Navbar />
      <CenterFrame />
      <RightFrame />
      
    </div>
  );
}

export default Dashboard;