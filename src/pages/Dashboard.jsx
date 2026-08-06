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
        <h1>Dashboard Overview</h1>

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