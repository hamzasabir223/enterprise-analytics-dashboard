import Layout from "../components/layout/Layout";
import "../styles/notifications.css";

const notifications = [
  {
    id: 1,
    title: "New Order Received",
    message: "Order #1025 has been placed successfully.",
    time: "5 min ago",
  },
  {
    id: 2,
    title: "Payment Received",
    message: "Payment of $2,450 has been received.",
    time: "20 min ago",
  },
  {
    id: 3,
    title: "New Customer",
    message: "A new customer has registered.",
    time: "1 hour ago",
  },
  {
    id: 4,
    title: "Monthly Report Ready",
    message: "Your monthly report is ready to download.",
    time: "Today",
  },
];

const Notifications = () => {
  return (
    <Layout>
      <div className="notifications-page">
        <h1>Notifications</h1>
        <p>Latest updates and system alerts.</p>

        <div className="notifications-list">
          {notifications.map((item) => (
            <div key={item.id} className="notification-card">
              <h3>{item.title}</h3>
              <p>{item.message}</p>
              <span>{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;