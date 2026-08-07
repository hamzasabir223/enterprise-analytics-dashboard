import Layout from "../components/layout/Layout";
import "../styles/analytics.css";

const CustomerAnalytics = () => {
  return (
    <Layout>
      <div className="analytics-page">
        <h1>Customer Analytics</h1>
        <p>Monitor customer growth and engagement.</p>

        <div className="analytics-cards">

          <div className="analytics-card">
            <h3>Total Customers</h3>
            <h2>4,520</h2>
          </div>

          <div className="analytics-card">
            <h3>Active Customers</h3>
            <h2>3,980</h2>
          </div>

          <div className="analytics-card">
            <h3>New Customers</h3>
            <h2>320</h2>
          </div>

          <div className="analytics-card">
            <h3>Returning Customers</h3>
            <h2>1,450</h2>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default CustomerAnalytics;