import HorizontalProductCard from "../../Components/HorizontalProductCard/HorizontalProductCard";
import Navbar from "../../Components/Navbar/Navbar";
import PriceComponent from "../../Components/PriceComponent/PriceComponent";
import { useCart } from "../../context/cart-context";

const Cart = () => {
  const { cart } = useCart();

  return (
    <>
      <Navbar />
      <main className=" flex flex-col gap-15 items-center">
        <p className="text-3xl">My Cart</p>
        <div className=" pt-4 flex flex-col md:flex-row gap-10 items-center">
          {cart?.length > 0 ? (
            cart.map((product) => (
              <HorizontalProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>Your Cart is Empty</p>
          )}
          <div>
            <PriceComponent />
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
