import Layout from "../components/layout/Layout";
import { useTheme } from "../context/ThemeContext";
import "../styles/settings.css";

const Settings = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <Layout>
      <div className="settings-page">

        <div className="settings-header">
          <h1>Settings</h1>
          <p>Manage your dashboard preferences.</p>
        </div>

        <div className="settings-card">
          <h3>Appearance</h3>

          <div className="setting-row">
            <div>
              <h4>Dark Mode</h4>
              <p>Switch between light and dark theme.</p>
            </div>

            <button
              className={`toggle-btn ${darkMode ? "on" : ""}`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <span></span>
            </button>
          </div>
        </div>

        <div className="settings-card">
          <h3>Account Preferences</h3>

          <div className="setting-row">
            <div>
              <h4>Email Notifications</h4>
              <p>Receive updates about your account.</p>
            </div>

            <input type="checkbox" defaultChecked />
          </div>

          <div className="setting-row">
            <div>
              <h4>Activity Alerts</h4>
              <p>Get notified about important activities.</p>
            </div>

            <input type="checkbox" defaultChecked />
          </div>
        </div>

        <div className="settings-card">
          <h3>Security</h3>

          <div className="setting-row">
            <div>
              <h4>Password</h4>
              <p>Update your account password.</p>
            </div>

            <button className="change-btn">
              Change Password
            </button>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Settings;