import Layout from "../components/layout/Layout";
import RevenueChart from "../components/charts/RevenueChart";
import SalesChart from "../components/charts/SalesChart";

import "../styles/analytics.css";

const SalesAnalytics = () => {
  return (
    <Layout>
      <div className="analytics-page">
        <h1>Sales Analytics</h1>
        <p>Monitor sales performance and business growth.</p>

        <div className="analytics-grid">
          <RevenueChart />
          <SalesChart />
        </div>
      </div>
    </Layout>
  );
};

export default SalesAnalytics;