import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { getProducts } from "../../api/getPoducts";
import { getAllCategories } from "../../api/getAllCAtegories";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const products = await getProducts();
        const categories = await getAllCategories();
        const updatedCategories = [...categories, {id: '1a', name: "All"}]
        setProducts(products);
        setCategories(updatedCategories);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const onCatergoryClick = (category)=>{
    const filteredByCategories = category.toLowerCase() === "all" ? products : products?.length > 0 && products.filter((product) => product.category.name.toLowerCase() === category.toLowerCase())
    setProducts(filteredByCategories);
  }
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <div className="flex gap-6 bg-gray-500 items-center px-4 py-2 overflow-x-scroll">
          {categories?.length > 0 &&
            categories.map((category) => (
              <div className="bg-gray-400 font-semibold rounded-2xl p-2 hover:cursor-pointer" onClick={() => onCatergoryClick(category.name)}>
                {category.name}
              </div>
            ))}
        </div>
        <div
          className="p-4 sm:p-4 md:p-10 grid gap-4 sm:gap-6 md:gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {isLoading ? (
            <p className="text-3xl border  min-w-[100vw] min-h-[90vh] m-auto">
              Loading products ...
            </p>
          ) : (
            products?.length > 0 ?
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            )) : <h2 className="justify-self-center text-xl">No products found for applied filter</h2>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
