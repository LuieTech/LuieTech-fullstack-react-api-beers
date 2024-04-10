import { Link } from "react-router-dom";
import "./navbar.css"
import homeIcon from "../assets/home-icon.png"


function Navbar() {

  return <section className="navbar">
  
    <Link to={"/"}>
      <img src={homeIcon} alt="home-icon" />
    </Link>

  </section>

}

export default Navbar;
