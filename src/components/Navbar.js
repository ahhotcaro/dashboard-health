//import component
import Card from "./Card";

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
      <Card icone={logo} alternative="logo" />
      <Card icone={menuIcon1} alternative="dashboard icon"/>
      <Card icone={menuIcon2} alternative="calendar icon"/>
      <Card icone={menuIcon3} alternative="chat icon"/>
      <Card icone={menuIcon4} alternative="stats icon"/>
      <Card icone={menuIcon5} alternative="settings icon"/>
      <Card icone={menuIcon6} alternative="log out icon"/>
      <Card icone={glass1} alternative="research icon"/>
    </div>
  );
}
