"use client";

import { useAppSelector } from "@/app/hooks/redux";
import ItemContainer from "./ItemContainer";

const Cart = () => {
  const items = useAppSelector((state) => state.cart.items);
  return (
    <main>
      {items.map((item) => (
        <ItemContainer key={item.id} item={item} />
      ))}
    </main>
  );
};

export default Cart;
