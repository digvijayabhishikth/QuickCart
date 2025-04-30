import { useCart } from "../../context/cart-context";

const PriceComponent = () => {
  const { cart } = useCart();

  const originalPrice = cart.reduce((acc, product) => {
    const original = product.price / (1 - product.discountPercentage / 100);
    return acc + original;
  }, 0);

  const amount = cart.reduce((acc, product) => acc + product.price, 0);

  const totalDiscount = originalPrice - amount;
  const discountPercentage = (totalDiscount / originalPrice) * 100;

  return (
    <div className="w-[300px] border shadow-2xs p-3 space-y-4">
      <div className="text-lg space-y-1">
        <div>Original Price: ₹{originalPrice.toFixed(2)}</div>
        <div>Final Amount: ₹{amount.toFixed(2)}</div>
        <div>Total Discount: ₹{totalDiscount.toFixed(2)}</div>
        <div>Overall Discount: {discountPercentage.toFixed(1)}%</div>
      </div>
      <div className="h-[1px] bg-gray-400" />
      <div className="flex justify-end font-semibold">
        Total Payable: ₹{amount.toFixed(2)}
      </div>
      <div>
        <button className="w-full bg-amber-400 py-2 rounded-md">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default PriceComponent;
