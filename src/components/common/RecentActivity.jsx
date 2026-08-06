import { recentActivities } from "../../data/dashboardData";
import "../../styles/dashboard.css";

const RecentActivity = () => {
  return (
    <div className="activity-card">
      <h3>Recent Activity</h3>

      {recentActivities.map((activity) => (
        <div className="activity-item" key={activity.id}>
          <div className="activity-dot"></div>

          <div>
            <h4>{activity.action}</h4>
            <p>{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;