import Layout from "../components/layout/Layout";
import "../styles/analytics.css";

const CustomerAnalytics = () => {
  return (
    <Layout>
      <div className="analytics-page">

        <div className="analytics-header">
          <div>
            <h1>Customer Analytics</h1>
            <p>Monitor customer growth and engagement.</p>
          </div>

          <div className="analytics-date">
            This Month
          </div>
        </div>

        <div className="analytics-cards">

          <div className="analytics-card">
            <span>Total Customers</span>
            <h2>4,520</h2>
            <small>+12% from last month</small>
          </div>

          <div className="analytics-card">
            <span>Active Customers</span>
            <h2>3,980</h2>
            <small>+8% from last month</small>
          </div>

          <div className="analytics-card">
            <span>New Customers</span>
            <h2>320</h2>
            <small>+15% from last month</small>
          </div>

          <div className="analytics-card">
            <span>Returning Customers</span>
            <h2>1,450</h2>
            <small>+6% from last month</small>
          </div>

        </div>

        <div className="customer-overview">

          <div className="overview-card">
            <h3>Customer Growth</h3>

            <div className="growth-bar">
              <div
                className="growth-fill"
                style={{ width: "78%" }}
              ></div>
            </div>

            <div className="growth-info">
              <span>Customer Engagement</span>
              <strong>78%</strong>
            </div>
          </div>

          <div className="overview-card">
            <h3>Customer Summary</h3>

            <div className="summary-row">
              <span>Active</span>
              <strong>3,980</strong>
            </div>

            <div className="summary-row">
              <span>New</span>
              <strong>320</strong>
            </div>

            <div className="summary-row">
              <span>Returning</span>
              <strong>1,450</strong>
            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
};

export default CustomerAnalytics;