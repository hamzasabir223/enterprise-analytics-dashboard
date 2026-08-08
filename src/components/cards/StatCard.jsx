const StatCard = ({ title, value, change, color, icon: Icon }) => {
  return (
    <div
      className="stat-card"
      style={{ borderLeft: `6px solid ${color}` }}
    >
      <div className="stat-top">
        <div
          className="stat-icon"
          style={{ backgroundColor: color }}
        >
          {Icon && <Icon />}
        </div>

        <span className="stat-change">
          {change}
        </span>
      </div>

      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
};

export default StatCard;