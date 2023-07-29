"use client";

import { Item } from "@/app/Interfaces/Item";
import React from "react";

interface Props {
  item: Item;
}

const ItemContainer = ({ item }: Props) => {
  return (
    <article className="">
      <h1>
        {item.title} <span>{item.amount}</span>
      </h1>
      <h2>{item.description}</h2>
      <h2>{item.price}</h2>
    </article>
  );
};

export default ItemContainer;
