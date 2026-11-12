const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
      </div>

      <div className="product-details">
        <span className="product-category">{product.category}</span>

        <h3>{product.title}</h3>

        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>

          <span className="product-rating">⭐ {product.rating}</span>
        </div>

        <button
          type="button"
          className="add-button"
          onClick={() => onAddToCart(product)}
          aria-label={`Add ${product.title} to cart`}
        >
          <span aria-hidden="true">+</span> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
