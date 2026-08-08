import Layout from "../components/layout/Layout";
import "../styles/notifications.css";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "New customer registered",
      message: "A new customer has joined your platform.",
      time: "5 minutes ago",
      type: "customer",
    },
    {
      id: 2,
      title: "Order completed",
      message: "Order #1005 has been successfully completed.",
      time: "20 minutes ago",
      type: "order",
    },
    {
      id: 3,
      title: "Monthly report generated",
      message: "Your monthly sales report is ready to view.",
      time: "1 hour ago",
      type: "report",
    },
    {
      id: 4,
      title: "Payment received",
      message: "Payment of $1,250 has been received.",
      time: "2 hours ago",
      type: "payment",
    },
  ];

  return (
    <Layout>
      <div className="notifications-page">

        <div className="notifications-header">
          <div>
            <h1>Notifications</h1>
            <p>Stay updated with your latest activities.</p>
          </div>

          <button className="mark-read-btn">
            Mark All as Read
          </button>
        </div>

        <div className="notification-summary">
          <div>
            <span>Total Notifications</span>
            <strong>12</strong>
          </div>

          <div>
            <span>Unread</span>
            <strong>4</strong>
          </div>

          <div>
            <span>Today</span>
            <strong>8</strong>
          </div>
        </div>

        <div className="notifications-card">
          <h3>Recent Notifications</h3>

          {notifications.map((notification) => (
            <div
              className="notification-item"
              key={notification.id}
            >
              <div className={`notification-icon ${notification.type}`}>
                ●
              </div>

              <div className="notification-content">
                <h4>{notification.title}</h4>
                <p>{notification.message}</p>
                <small>{notification.time}</small>
              </div>

              <span className="unread-dot"></span>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default Notifications;