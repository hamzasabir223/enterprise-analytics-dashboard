import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

import "../../styles/navbar.css";
import ThemeToggle from "../common/ThemeToggle";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="navbar-right">
        <ThemeToggle />

        <button className="icon-btn">
          <FaBell />
        </button>

        <div className="profile">
          <FaUserCircle className="profile-icon" />

          <div>
            <h4>Hamza Sabir</h4>
            <p>Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;