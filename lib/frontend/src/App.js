import { useState } from "react";
// Style && assets
import "./styles/Dashboard2.css";

// Components
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import RightFrame from "./components/RightFrame";
import Admin from "./Admin";

// function to call all other JS files
function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const setAdmin = () => {
    const oldAdmin = !isAdmin;
    setIsAdmin(oldAdmin);
  };
  // what the user will see on the dashboard
  return (
    <div className="body">
      <Navbar setAdmin={setAdmin} />
      <div className="middleScreen">
        {!isAdmin ? (
          <>
            <Main />
            <RightFrame />
          </>
        ) : (
          <Admin />
        )}
      </div>
    </div>
  );
}

export default App;
