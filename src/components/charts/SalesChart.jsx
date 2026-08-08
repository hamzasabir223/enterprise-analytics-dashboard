import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { salesData } from "../../data/dashboardData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const SalesChart = () => {
  return (
    <div className="chart-card">
      <h3>Weekly Sales</h3>

      <div className="sales-chart">
        <Bar
          data={salesData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
};

export default SalesChart;