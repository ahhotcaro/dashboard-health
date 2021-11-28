import menuIcon1 from "../assets/menuIcon1.jpg";
import menuIcon2 from "../assets/menuIcon2.jpg";
import menuIcon3 from "../assets/menuIcon3.jpg";
import menuIcon4 from "../assets/menuIcon4.jpg";
import menuIcon5 from "../assets/menuIcon5.jpg";
import menuIcon6 from "../assets/menuIcon6.jpg";
import glass1 from "../assets/glass1.jpg";
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <div className="nav">
      <img src={logo} alt="logo" className="logo" />
      <img src={menuIcon1} alt="dashboard icon" className="menuIcon1" />
      <img src={menuIcon2} alt="calendar icon" className="menuIcon2" />
      <img src={menuIcon3} alt="chat icon" className="menuIcon3" />
      <img src={menuIcon4} alt="stats icon" className="menuIcon4" />
      <img src={menuIcon5} alt="settings icon" className="menuIcon5" />
      <img src={menuIcon6} alt="log out icon" className="menuIcon6" />
      <img src={glass1} alt="research icon" className="menuIcon7" />
    </div>
  );
}
