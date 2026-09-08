import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [] // array of { id, name, price, image, quantity }
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItem: Add plant to cart. If already present, increment quantity.
    addItem: (state, action) => {
      const { id, name, price, image } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, name, price: Number(price), image, quantity: 1 });
      }
    },

    // removeItem: Remove item from cart by id
    removeItem: (state, action) => {
      const id = typeof action.payload === 'object' ? action.payload.id : action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },

    // updateQuantity: Increase or decrease quantity of a specific item
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        if (type === 'increment') {
          item.quantity += 1;
        } else if (type === 'decrement') {
          if (item.quantity > 1) {
            item.quantity -= 1;
          }
        }
      }
    },

    // clearCart: Empty the entire cart
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

// Aliases for backward compatibility
export const addToCart = addItem;
export const removeFromCart = removeItem;
export const increaseQuantity = (id) => updateQuantity({ id, type: 'increment' });
export const decreaseQuantity = (id) => updateQuantity({ id, type: 'decrement' });

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectTotalPrice = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
