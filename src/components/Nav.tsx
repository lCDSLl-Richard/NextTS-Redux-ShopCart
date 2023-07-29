"use client";

import { useAppSelector } from "@/app/hooks/redux";
import Link from "next/link";

const Nav = () => {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <nav className="w-screen h-20 bg-gray-900 text-slate-200 sticky top-0 z-10">
      <ul className="flex flex-row items-center h-full justify-evenly px-8">
        <Link href={"/"}>
          <li className="text-2xl underline">Home</li>
        </Link>
        <Link href={"/cart"}>
          <li className="text-2xl">
            <span className="underline">Cart</span>
            <span className="no-underline"> ({items.length})</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
