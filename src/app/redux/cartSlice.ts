import { Item } from "@/app/Interfaces/Item";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface initialState {
  items: Item[];
}

const initialState: initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      if (state.items.map((item) => item.id).includes(action.payload.id)) {
        state.items.find((item) => item.id === action.payload.id)!.amount!++;
      } else {
        state.items.push({ ...action.payload, amount: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload)!;
      if (item.amount === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        item.amount!--;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
