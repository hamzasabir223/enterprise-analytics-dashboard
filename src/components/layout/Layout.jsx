import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "250px",
          minHeight: "100vh",
          background: "#f8fafc",
        }}
      >
        <Navbar />

        <main style={{ padding: "20px" }}>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;