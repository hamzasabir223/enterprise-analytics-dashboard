import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Pie } from "react-chartjs-2";
import { pieData } from "../../data/dashboardData";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  return (
    <div className="chart-card">
      <h3>Sales by Category</h3>

      <div className="pie-chart">
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default PieChart;
