"use client";

import { useAppSelector } from "@/app/hooks/redux";
import ItemContainer from "./ItemContainer";

const Cart = () => {
  const items = useAppSelector((state) => state.cart.items);
  const total = items.length
    ? items
        .map((item) => item.price * item.amount!)
        .reduce((prev, curr) => (prev += curr))
    : 0;

  return (
    <main className="flex flex-col items-center bg-slate-700">
      {items.map((item) => (
        <ItemContainer key={item.id} item={item} />
      ))}
      <section className="w-11/12 my-3 p-2 rounded-md text-gray-200 bg-gray-600 flex text-2xl text-right">
        <h1 className="w-full">Total: ${total}</h1>
      </section>
    </main>
  );
};

export default Cart;
