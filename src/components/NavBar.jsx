import { FaAirbnb } from "react-icons/fa";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="icon">
        <FaAirbnb />
        <span> AirBnB</span>
      </div>
    </div>
  );
}

export default NavBar;
