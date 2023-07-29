"use client";

import { Item } from "@/app/Interfaces/Item";
import React from "react";
import Image from "next/image";
import { Provider } from "react-redux";
import store from "@/app/redux/store";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux";
import { addItem } from "@/app/redux/cartSlice";

interface Props {
  item: Item;
}

const Card = ({ item }: Props) => {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const containsItem = items.some((i) => i.id === item.id);

  return (
    <Provider store={store}>
      <article className="bg-gray-200 flex flex-col rounded-lg text-slate-700 text-base h-[45rem] justify-between items-center">
        <h1 className="text-lg text-center py-2 px-5 self-start h-28 w-full">
          {item.title}
        </h1>
        <div className="w-5/6 h-96 flex items-center justify-center relative">
          <Image src={item.image} alt={item.title} fill />
        </div>
        <div className="w-full my-5 h-10">
          <button
            className="bg-slate-400 hover:cursor-pointer rounded-lg shadow-lg w-5/6 h-full active:transition-all active:translate-y-0.5"
            onClick={() => dispatch(addItem(item))}
          >
            {containsItem ? "Go to cart" : "Add to cart"}
          </button>
        </div>
      </article>
    </Provider>
  );
};

export default Card;
