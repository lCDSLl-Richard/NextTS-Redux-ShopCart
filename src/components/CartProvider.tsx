"use client";

import { Provider } from "react-redux";
import store from "@/app/redux/store";

interface Props {
  children: React.ReactNode;
}

const CartProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default CartProvider;
