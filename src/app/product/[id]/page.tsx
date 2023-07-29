import { Item } from "@/app/Interfaces/Item";
import { url } from "@/app/async";
import Image from "next/image";

interface Props {
  params: { id: string };
}

async function fetchProduct(id: string) {
  url.pathname = `products/${id}`;
  const res = await fetch(url);
  return res.json();
}

const Page = async ({ params }: Props) => {
  const item: Item = await fetchProduct(params.id);
  return (
    <main>
      <h1>{item.title}</h1>
      <h2>{item.description}</h2>
      <div className="relative w-1/2 aspect-square">
        <Image src={item.image} alt={item.title} fill />
      </div>
    </main>
  );
};

export default Page;
