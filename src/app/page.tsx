import Card from "@/components/Card";
import { Item } from "./Interfaces/Item";
import CartProvider from "@/components/CartProvider";
import { url } from "./async";

async function fetchItems() {
  const res = await fetch(url);

  return res.json();
}

const Page = async () => {
  const items: Item[] = await fetchItems();

  return (
    <main className="bg-gray-800 text-slate-200 text-center">
      <h1 className="text-6xl py-6">Welcome to the Fake Store!</h1>
      <CartProvider>
        <section className="grid lg:grid-cols-3 gap-10 px-5 md:grid-cols-2 sm:grid-cols-1">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </section>
      </CartProvider>
    </main>
  );
};

export default Page;
