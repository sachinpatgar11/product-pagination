import { useEffect, useRef } from "react";

const AddToCartModal = ({ isOpen, product, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog || !isOpen) return;

    if (!dialog.open) {
      dialog.showModal();
    }

    return () => {
      if (dialog.open) {
        dialog.close();
      }
    };
  }, [isOpen]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!product) return null;

  return (
    <dialog
      ref={dialogRef}
      className="cart-modal"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClick={handleBackdropClick}
      onClose={onClose}
    >
      <div className="modal-content">
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close confirmation dialog"
        >
          &times;
        </button>

        <div className="success-icon" aria-hidden="true">
          &#10003;
        </div>

        <h2 id="modal-title">Added to Cart!</h2>

        <p id="modal-description">
          <span className="success-product">{product.title}</span> has been
          successfully added to your cart.
        </p>

        <p className="modal-price">Price: ${product.price.toFixed(2)}</p>

        <button
          type="button"
          className="modal-done"
          onClick={onClose}
          autoFocus
        >
          Continue Shopping
        </button>
      </div>
    </dialog>
  );
};

export default AddToCartModal;
