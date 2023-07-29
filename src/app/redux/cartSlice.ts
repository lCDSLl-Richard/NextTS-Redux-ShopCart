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
        action.payload.amount = 1;
        state.items.push(action.payload);
      }
    },
  },
});

export const { addItem } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
