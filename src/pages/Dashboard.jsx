import Layout from "../components/layout/Layout";
import StatCard from "../components/cards/StatCard";
import { dashboardStats } from "../data/dashboardData";
import RevenueChart from "../components/charts/RevenueChart";
import SalesChart from "../components/charts/SalesChart";
import PieChart from "../components/charts/PieChart";
import RecentOrders from "../components/common/RecentOrders";
import RecentActivity from "../components/common/RecentActivity";
import TopProducts from "../components/common/TopProducts";

import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard">
        <div className="dashboard-header">
          <div>
            <h1>Good Evening, Hamza 👋</h1>
            <p>Welcome back to Enterprise Analytics Dashboard.</p>
          </div>

          <div className="dashboard-date">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>

        <div className="stats-grid">
          {dashboardStats.map((item) => (
            <StatCard
              key={item.title}
              title={item.title}
              value={item.value}
              color={item.color}
            />
          ))}
        </div>
        <div className="chart-grid">
          <RevenueChart />
          <SalesChart />
          <RecentOrders />
          <PieChart />
          <RecentActivity />
          <TopProducts />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
