import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [] // array of { id, name, price, image, quantity }
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart. If already present, increment quantity, otherwise add with quantity: 1
    addToCart: (state, action) => {
      const { id, name, price, image } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id,
          name,
          price: Number(price),
          image,
          quantity: 1
        });
      }
    },

    // Remove item from cart by id
    removeFromCart: (state, action) => {
      const id = typeof action.payload === 'object' ? action.payload.id : action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },

    // Increase quantity of specific item
    increaseQuantity: (state, action) => {
      const id = typeof action.payload === 'object' ? action.payload.id : action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease quantity of specific item (cannot drop below 1 unless removed)
    decreaseQuantity: (state, action) => {
      const id = typeof action.payload === 'object' ? action.payload.id : action.payload;
      const item = state.items.find(item => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;

export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectTotalPrice = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
