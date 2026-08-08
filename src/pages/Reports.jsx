import Layout from "../components/layout/Layout";
import "../styles/reports.css";

const Reports = () => {
  const reports = [
    {
      name: "Monthly Sales Report",
      type: "Sales",
      date: "August 2026",
      status: "Ready",
    },
    {
      name: "Customer Growth Report",
      type: "Customers",
      date: "August 2026",
      status: "Ready",
    },
    {
      name: "Revenue Performance",
      type: "Revenue",
      date: "July 2026",
      status: "Ready",
    },
    {
      name: "Product Performance",
      type: "Products",
      date: "July 2026",
      status: "Processing",
    },
  ];

  return (
    <Layout>
      <div className="reports-page">

        <div className="reports-header">
          <div>
            <h1>Reports</h1>
            <p>View and manage your business reports.</p>
          </div>

          <button className="generate-btn">
            + Generate Report
          </button>
        </div>

        <div className="report-stats">

          <div className="report-stat-card">
            <span>Total Reports</span>
            <h2>24</h2>
          </div>

          <div className="report-stat-card">
            <span>Generated</span>
            <h2>21</h2>
          </div>

          <div className="report-stat-card">
            <span>Processing</span>
            <h2>3</h2>
          </div>

        </div>

        <div className="reports-table-card">
          <h3>Recent Reports</h3>

          <div className="reports-table-wrapper">
            <table className="reports-table">
              <thead>
                <tr>
                  <th>Report Name</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {reports.map((report) => (
                  <tr key={report.name}>
                    <td>{report.name}</td>
                    <td>{report.type}</td>
                    <td>{report.date}</td>
                    <td>
                      <span
                        className={
                          report.status === "Ready"
                            ? "report-status ready"
                            : "report-status processing"
                        }
                      >
                        {report.status}
                      </span>
                    </td>
                    <td>
                      <button className="view-btn">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Reports;