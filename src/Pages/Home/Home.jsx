import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { getProducts } from "../../api/getPoducts";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <Navbar />
      <main className="p-4 sm:p-4 md:p-10 grid gap-4 sm:gap-6 md:gap-8"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {isLoading ? (
          <p className="text-3xl border  min-w-[100vw] min-h-[90vh] m-auto">Loading products ...</p>
        ) : (
          products?.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </main>
    </>
  );
};

export default Home;
