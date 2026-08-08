import Layout from "../components/layout/Layout";
import SalesChart from "../components/charts/SalesChart";
import RevenueChart from "../components/charts/RevenueChart";
import "../styles/analytics.css";

const SalesAnalytics = () => {
  return (
    <Layout>
      <div className="analytics-page">

        <div className="analytics-header">
          <div>
            <h1>Sales Analytics</h1>
            <p>Track sales performance and revenue trends.</p>
          </div>

          <div className="analytics-date">
            This Month
          </div>
        </div>

        <div className="analytics-cards">

          <div className="analytics-card">
            <span>Total Sales</span>
            <h2>$125,450</h2>
            <small>+18% from last month</small>
          </div>

          <div className="analytics-card">
            <span>Total Orders</span>
            <h2>1,845</h2>
            <small>+12% from last month</small>
          </div>

          <div className="analytics-card">
            <span>Average Order</span>
            <h2>$68</h2>
            <small>+6% from last month</small>
          </div>

          <div className="analytics-card">
            <span>Conversion Rate</span>
            <h2>24.8%</h2>
            <small>+4% from last month</small>
          </div>

        </div>

        <div className="sales-charts">
          <RevenueChart />
          <SalesChart />
        </div>

      </div>
    </Layout>
  );
};

export default SalesAnalytics;