import { NavLink } from "react-router-dom";
import {
  FaChartPie,
  FaChartLine,
  FaUsers,
  FaFileAlt,
  FaBell,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "../../styles/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>Analytics</h2>
      </div>

      <nav className="menu">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaChartPie />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/sales"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaChartLine />
          <span>Sales Analytics</span>
        </NavLink>

        <NavLink
          to="/customers"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaUsers />
          <span>Customer Analytics</span>
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaFileAlt />
          <span>Reports</span>
        </NavLink>

        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaBell />
          <span>Notifications</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaUser />
          <span>Profile</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaCog />
          <span>Settings</span>
        </NavLink>

        <NavLink to="/" className="menu-item logout">
          <FaSignOutAlt />
          <span>Logout</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;