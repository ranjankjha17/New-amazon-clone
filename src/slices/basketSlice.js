import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  // Actions
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);

      let newBasket = [...state.items];
      if (index >= 0) {
        // remove item
        newBasket.splice(index, 1);
      } else {
        // item not found
        console.warn(`Cannot remove product (id: ${action.payload}) as it's not in the basket`);
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0);
export default basketSlice.reducer;
