import {useState} from "react";
// Style && assets
import "./styles/Dashboard2.css";

// Components
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import RightFrame from "./components/RightFrame";
import Admin from "./Admin"


function App() {
	const [isAdmin, setIsAdmin] = useState(false);
	const setAdmin = () => {
		const oldAdmin = !isAdmin;
		setIsAdmin(oldAdmin);
	}
	return (
		<div className='body'>
			<Navbar setAdmin={setAdmin} />
			<div className="middleScreen">
				{!isAdmin?<>
					<Main />
					<RightFrame />
				</>:<Admin />}
			</div>
			
		</div>
	)
}

export default App;


