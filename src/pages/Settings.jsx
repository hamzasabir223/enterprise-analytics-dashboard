import Layout from "../components/layout/Layout";
import "../styles/settings.css";

const Settings = () => {
  return (
    <Layout>
      <div className="settings-page">
        <h1>Settings</h1>
        <p>Manage your dashboard preferences.</p>

        <div className="settings-card">

          <div className="setting-item">
            <label>Dark Mode</label>
            <input type="checkbox" />
          </div>

          <div className="setting-item">
            <label>Email Notifications</label>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="setting-item">
            <label>Auto Backup</label>
            <input type="checkbox" />
          </div>

          <div className="setting-item">
            <label>Language</label>

            <select>
              <option>English</option>
              <option>Urdu</option>
            </select>
          </div>

          <button className="save-btn">
            Save Settings
          </button>

        </div>
      </div>
    </Layout>
  );
};

export default Settings;