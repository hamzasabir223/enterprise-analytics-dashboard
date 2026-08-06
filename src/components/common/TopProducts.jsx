import { topProducts } from "../../data/dashboardData";
import "../../styles/dashboard.css";

const TopProducts = () => {
  return (
    <div className="products-card">
      <h3>Top Products</h3>

      {topProducts.map((product) => (
        <div className="product-item" key={product.id}>
          <div className="product-header">
            <span>{product.name}</span>
            <span>{product.sales}</span>
          </div>

          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: `${product.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopProducts;