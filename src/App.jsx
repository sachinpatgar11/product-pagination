import { useEffect, useState } from "react";

import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";
import AddToCartModal from "./components/AddToCartModal";

import { fetchProducts } from "./services/productService";

const PRODUCTS_PER_PAGE = 8;

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  // Modal state
  const [selectedProduct, setSelectedProduct] = useState(null);

  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  useEffect(() => {
    const controller = new AbortController();

    const loadProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const skip = (currentPage - 1) * PRODUCTS_PER_PAGE;

        const data = await fetchProducts(
          PRODUCTS_PER_PAGE,
          skip,
          controller.signal,
        );

        setProducts(data.products);
        setTotalProducts(data.total);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong");
          setProducts([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      controller.abort();
    };
  }, [currentPage, retryCount]);

  // Add product to cart
  const handleAddToCart = (product) => {
    setSelectedProduct(product);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
  };

  const startItem =
    totalProducts === 0 ? 0 : (currentPage - 1) * PRODUCTS_PER_PAGE + 1;

  const endItem = Math.min(currentPage * PRODUCTS_PER_PAGE, totalProducts);

  return (
    <div className="app-container">
      <header className="header">
        <div>
          <h1>Product Store</h1>
          <p>Explore our latest products</p>
        </div>
      </header>

      <main className="main-content">
        <div className="section-header">
          <div>
            <h2>All Products</h2>
            <p>Find something you'll love.</p>
          </div>

          <span className="total-products">{totalProducts} Products</span>
        </div>

        {loading && (
          <div className="status-message">
            <div className="loader"></div>
            <p>Loading products...</p>
          </div>
        )}

        {error && !loading && (
          <div className="error-message">
            <p>{error}</p>

            <button onClick={() => setRetryCount((count) => count + 1)}>
              Retry
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>

            <div className="pagination-section">
              <p className="page-info">
                Showing {startItem} - {endItem} of {totalProducts} products
              </p>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </>
        )}
      </main>

      <AddToCartModal
        isOpen={Boolean(selectedProduct)}
        product={selectedProduct}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
