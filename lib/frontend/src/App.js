// import Dashboard from './components/Dashboard'

// Style && assets
import "./styles/Dashboard2.css";

// Components
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import RightFrame from "./components/RightFrame";


function App() {
	return (
		<div className='body'>
			<Navbar />
			<div className="middleScreen">
				<Main />
				<RightFrame />
			</div>	
			
		</div>
	)
}

export default App


