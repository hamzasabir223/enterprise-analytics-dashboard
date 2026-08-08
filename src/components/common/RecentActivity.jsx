import { recentActivities } from "../../data/dashboardData";
import "../../styles/dashboard.css";

const RecentActivity = () => {
  return (
    <div className="activity-card">
      <div className="card-header">
        <h3>Recent Activity</h3>
        <span>Latest updates</span>
      </div>

      <div className="activity-list">
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
    </div>
  );
};

export default RecentActivity;