import Layout from "../components/layout/Layout";
import "../styles/profile.css";

const Profile = () => {
  return (
    <Layout>
      <div className="profile-page">

        <div className="profile-header">
          <div>
            <h1>My Profile</h1>
            <p>Manage your account information.</p>
          </div>

          <button className="edit-profile-btn">
            Edit Profile
          </button>
        </div>

        <div className="profile-layout">

          <div className="profile-card-main">
            <div className="profile-avatar">
              HS
            </div>

            <h2>Hamza Sabir</h2>
            <p className="profile-role">Administrator</p>

            <div className="profile-info">
              <div>
                <span>Email</span>
                <strong>hamza@example.com</strong>
              </div>

              <div>
                <span>Role</span>
                <strong>Administrator</strong>
              </div>

              <div>
                <span>Member Since</span>
                <strong>January 2026</strong>
              </div>
            </div>
          </div>

          <div className="profile-details-card">
            <h3>Account Details</h3>

            <div className="detail-row">
              <span>Full Name</span>
              <strong>Hamza Sabir</strong>
            </div>

            <div className="detail-row">
              <span>Email Address</span>
              <strong>hamza@example.com</strong>
            </div>

            <div className="detail-row">
              <span>Account Status</span>
              <span className="account-active">Active</span>
            </div>

            <div className="detail-row">
              <span>Last Login</span>
              <strong>Today</strong>
            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
};

export default Profile;