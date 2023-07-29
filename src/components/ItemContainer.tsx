"use client";

import { Item } from "@/app/Interfaces/Item";
import React from "react";
import Image from "next/image";
import { useAppDispatch } from "@/app/hooks/redux";
import { addItem, removeItem } from "@/app/redux/cartSlice";

interface Props {
  item: Item;
}

const ItemContainer = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <article className="w-11/12 my-3 px-2 py-6 rounded-md text-gray-200 bg-gray-600 flex shadow-md">
      <div className="w-5/6 flex flex-col justify-between">
        <h1 className="text-xl font-bold">
          {item.title} <span className="font-light">(${item.price})</span>
        </h1>
        <h2>{item.description}</h2>
        <h2>Subtotal: ${item.price * item.amount!}</h2>
        <div className="flex justify-end">
          {" "}
          <button
            className="bg-blue-700 shadow-lg w-12 rounded-lg"
            onClick={() => dispatch(removeItem(item.id))}
          >
            -
          </button>
          <span className="px-5">{item.amount}</span>
          <button
            className="bg-blue-700 shadow-lg w-12 rounded-lg"
            onClick={() => dispatch(addItem(item))}
          >
            +
          </button>
        </div>
      </div>
      <aside className="w-1/6 relative h-[200px] mx-5">
        <Image src={item.image} alt={item.title} fill />
      </aside>
    </article>
  );
};

export default ItemContainer;
