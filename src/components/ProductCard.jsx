import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../redux/CartSlice';
import { ShoppingBag, Check } from 'lucide-react';

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Check if this plant is already in the cart
  const isAdded = cartItems.some((item) => item.id === plant.id);

  const handleAddToCart = () => {
    if (!isAdded) {
      dispatch(addToCart(plant));
    }
  };

  return (
    <div className="product-card" id={`product-card-${plant.id}`}>
      {/* Category Tag & Sale Badge */}
      <div className="card-badge-container">
        <span className="plant-tag">{plant.category}</span>
      </div>

      {/* Plant Thumbnail */}
      <div className="product-image-container">
        <img
          src={plant.image}
          alt={plant.name}
          className="product-image"
          loading="lazy"
        />
      </div>

      {/* Plant Info */}
      <div className="product-info">
        <div className="product-header">
          <h3 className="product-name">{plant.name}</h3>
          <span className="product-price">${Number(plant.price).toFixed(2)}</span>
        </div>

        <p className="product-description">{plant.description}</p>

        {/* Action Button */}
        <button
          type="button"
          id={`add-to-cart-btn-${plant.id}`}
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`btn-add-to-cart ${isAdded ? 'btn-added' : ''}`}
          aria-label={isAdded ? `${plant.name} already added to cart` : `Add ${plant.name} to cart`}
        >
          {isAdded ? (
            <>
              <Check size={18} className="btn-icon" />
              <span>Added to Cart</span>
            </>
          ) : (
            <>
              <ShoppingBag size={18} className="btn-icon" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
