import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  selectCartItems,
  selectTotalQuantity,
  selectTotalPrice,
  addItem,
  removeItem,
  updateQuantity,
  clearCart
} from '../redux/CartSlice';
import Navbar from './Navbar';
import {
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  CreditCard,
  ShoppingBag,
  Sparkles,
  CheckCircle2,
  X
} from 'lucide-react';

// ─── Helper: calculate total cost for a single cart item ────────────────────
function calculateTotalCost(item) {
  return (Number(item.price) * item.quantity).toFixed(2);
}

// ─── Helper: calculate overall cart total amount ────────────────────────────
function calculateTotalAmount(cartItems) {
  return cartItems
    .reduce((total, item) => total + Number(item.price) * item.quantity, 0)
    .toFixed(2);
}

// ─── SingleCartItem — renders one row in the cart list ───────────────────────
export const SingleCartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(updateQuantity({ id: item.id, type: 'increment' }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, type: 'decrement' }));
    } else {
      // Remove when quantity would drop below 1
      dispatch(removeItem(item.id));
    }
  };

  const handleDelete = () => {
    dispatch(removeItem(item.id));
  };

  // Use named helper function to compute item total cost
  const itemTotal = calculateTotalCost(item);

  return (
    <div className="cart-item-card" id={`cart-item-${item.id}`}>
      {/* Plant Thumbnail */}
      <div className="cart-item-image-wrapper">
        <img
          src={item.image}
          alt={item.name}
          className="cart-item-image"
        />
      </div>

      {/* Item Details */}
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.name}</h3>
        <p className="cart-item-unit-price">${Number(item.price).toFixed(2)} each</p>

        {/* Quantity Controls: [-] qty [+] */}
        <div className="cart-quantity-controls">
          <span className="qty-label">Quantity:</span>
          <div className="qty-button-group">
            <button
              type="button"
              className="btn-qty btn-decrement"
              id={`decrease-qty-${item.id}`}
              onClick={handleDecrement}
              aria-label={`Decrease quantity of ${item.name}`}
            >
              <Minus size={16} />
            </button>
            <span className="qty-value" id={`qty-value-${item.id}`}>
              {item.quantity}
            </span>
            <button
              type="button"
              className="btn-qty btn-increment"
              id={`increase-qty-${item.id}`}
              onClick={handleIncrement}
              aria-label={`Increase quantity of ${item.name}`}
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Item Subtotal & Delete */}
      <div className="cart-item-actions">
        <div className="cart-item-subtotal-block">
          <span className="subtotal-label">Item Total:</span>
          {/* Dynamic item total — updates when quantity changes */}
          <span className="subtotal-amount" id={`item-total-${item.id}`}>
            ${itemTotal}
          </span>
        </div>

        {/* Delete Button — removes item entirely from Redux cart */}
        <button
          type="button"
          className="btn-delete-item"
          id={`delete-item-${item.id}`}
          onClick={handleDelete}
          aria-label={`Remove ${item.name} from cart`}
        >
          <Trash2 size={18} />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

// ─── CartItem — full cart page component ────────────────────────────────────
const CartItem = ({ item, isRowOnly = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalPrice = useSelector(selectTotalPrice);

  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  // If used as a standalone row (e.g. mapped from external list)
  if (isRowOnly && item) {
    return <SingleCartItem item={item} />;
  }

  const handleCheckout = () => {
    setShowCheckoutModal(true);
  };

  // Continue Shopping — navigate back to /plants
  const handleContinueShopping = () => {
    navigate('/plants');
  };

  // Use named helper to compute overall total amount dynamically
  const totalAmount = calculateTotalAmount(cartItems);

  return (
    <div className="cart-page-wrapper">
      {/* Navbar */}
      <Navbar />

      <main className="cart-main container">
        {/* Page Header */}
        <div className="cart-page-header">
          <div className="cart-header-title-group">
            <h1 className="cart-page-title">Your Plant Cart</h1>
            <p className="cart-page-subtitle">
              Review your selected botanicals and prepare your green sanctuary.
            </p>
          </div>
          <button
            type="button"
            className="btn-continue-shopping-top"
            onClick={handleContinueShopping}
          >
            <ArrowLeft size={18} />
            <span>Continue Shopping</span>
          </button>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="empty-cart-state" id="empty-cart-view">
            <div className="empty-cart-icon-bubble">
              <ShoppingBag size={48} className="empty-cart-icon" />
            </div>
            <h2>Your cart is currently empty</h2>
            <p>It looks like you haven't added any lovely plants to your collection yet.</p>
            <Link to="/plants" className="btn-browse-plants">
              <Sparkles size={18} />
              <span>Browse Greenery</span>
            </Link>
          </div>
        ) : (
          /* Cart Items + Order Summary */
          <div className="cart-layout-grid">
            {/* Left: Cart Items List */}
            <div className="cart-items-column">
              <div className="cart-items-header">
                <span className="cart-items-count-text">
                  Items in Basket ({totalQuantity})
                </span>
                <button
                  type="button"
                  className="btn-clear-cart"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear All
                </button>
              </div>

              <div className="cart-items-list" id="cart-items-container">
                {cartItems.map((cartItem) => (
                  <SingleCartItem key={cartItem.id} item={cartItem} />
                ))}
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="cart-summary-column">
              <div className="order-summary-card">
                <h2 className="summary-title">Order Summary</h2>

                <div className="summary-details">
                  {/* Total Items — updates dynamically */}
                  <div className="summary-row">
                    <span className="summary-label">Total Items:</span>
                    <span className="summary-value" id="cart-total-items">{totalQuantity}</span>
                  </div>

                  <div className="summary-row">
                    <span className="summary-label">Subtotal:</span>
                    <span className="summary-value">${totalPrice.toFixed(2)}</span>
                  </div>

                  <div className="summary-row">
                    <span className="summary-label">Estimated Shipping:</span>
                    <span className="summary-value free-shipping">FREE</span>
                  </div>

                  <div className="summary-divider"></div>

                  {/* Total Amount — computed by calculateTotalAmount(), updates dynamically */}
                  <div className="summary-row total-row">
                    <span className="summary-total-label">Total Amount:</span>
                    <span className="summary-total-value" id="cart-total-amount">
                      ${totalAmount}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="summary-actions">
                  {/* Checkout Button */}
                  <button
                    type="button"
                    className="btn-checkout"
                    id="checkout-btn"
                    onClick={handleCheckout}
                  >
                    <CreditCard size={20} />
                    <span>Checkout</span>
                  </button>

                  {/* Continue Shopping Button — navigates to /plants */}
                  <button
                    type="button"
                    className="btn-continue-shopping"
                    id="continue-shopping-btn"
                    onClick={handleContinueShopping}
                  >
                    <ArrowLeft size={18} />
                    <span>Continue Shopping</span>
                  </button>
                </div>

                <div className="summary-guarantee">
                  <CheckCircle2 size={16} className="guarantee-icon" />
                  <span>30-Day Healthy Plant Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* "Checkout Coming Soon!" Modal */}
      {showCheckoutModal && (
        <div className="modal-overlay" onClick={() => setShowCheckoutModal(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="checkout-modal-title"
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setShowCheckoutModal(false)}
              aria-label="Close message"
            >
              <X size={20} />
            </button>

            <div className="modal-icon-wrapper">
              <Sparkles size={36} className="modal-icon" />
            </div>

            <h3 id="checkout-modal-title" className="modal-title">
              Checkout Coming Soon!
            </h3>

            <p className="modal-message">
              Thank you for shopping at Paradise Nursery! Our secure payment gateway is currently
              being prepared for our upcoming harvest launch.
            </p>

            {/* Summary box with dynamic totals */}
            <div className="modal-summary-box">
              <span>Total Items: <strong>{totalQuantity}</strong></span>
              <span>Total Amount: <strong>${totalAmount}</strong></span>
            </div>

            <button
              type="button"
              className="btn-modal-action"
              onClick={() => setShowCheckoutModal(false)}
            >
              Got It, Keep Exploring
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
