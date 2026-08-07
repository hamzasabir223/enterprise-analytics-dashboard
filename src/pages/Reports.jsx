import Layout from "../components/layout/Layout";
import "../styles/reports.css";

const Reports = () => {
  return (
    <Layout>
      <div className="reports-page">
        <h1>Reports</h1>
        <p>Generate and download business reports.</p>

        <div className="reports-grid">
          <div className="report-card">
            <h3>Monthly Report</h3>
            <p>Sales summary for this month.</p>
            <button>Download</button>
          </div>

          <div className="report-card">
            <h3>Sales Report</h3>
            <p>Complete sales performance.</p>
            <button>Download</button>
          </div>

          <div className="report-card">
            <h3>Customer Report</h3>
            <p>Customer growth and activity.</p>
            <button>Download</button>
          </div>

          <div className="report-card">
            <h3>Revenue Report</h3>
            <p>Revenue analysis overview.</p>
            <button>Download</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;