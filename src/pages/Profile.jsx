import Layout from "../components/layout/Layout";
import "../styles/profile.css";

const Profile = () => {
  return (
    <Layout>
      <div className="profile-page">
        <h1>My Profile</h1>
        <p>Manage your personal information.</p>

        <div className="profile-card">
          <div className="profile-avatar">
            <h2>HS</h2>
          </div>

          <div className="profile-info">
            <h3>Hamza Sabir</h3>
            <p>Administrator</p>

            <div className="info-item">
              <strong>Email:</strong> hamza@example.com
            </div>

            <div className="info-item">
              <strong>Phone:</strong> +92 300 1234567
            </div>

            <div className="info-item">
              <strong>Location:</strong> Peshawar, Pakistan
            </div>

            <button className="edit-btn">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;