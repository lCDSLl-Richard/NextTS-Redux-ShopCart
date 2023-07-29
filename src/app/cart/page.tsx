import Cart from "@/components/Cart";
import CartProvider from "@/components/CartProvider";

const Page = () => {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
};

export default Page;
