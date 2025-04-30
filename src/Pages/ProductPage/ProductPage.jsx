import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/getPoducts";

const ProductPage = () => {
  const { id } = useParams();
  const [singleProduct, setProduct] = useState(null); // start from null!

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      console.log("Fetched products: ", products);
      console.log("URL id: ", id);
      const reqProduct = products.find((p) => p.id === parseInt(id));
      console.log("Required Product: ", reqProduct);
      setProduct(reqProduct);
    })();
  }, [id]);

  console.log("Single product is: ", singleProduct);

  if (!singleProduct) {
    return (
      <>
        <Navbar />
        <main className="px-10 flex justify-center items-center h-screen">
          <p>Loading Product...</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="px-10">
        <SingleProduct product={singleProduct} />
      </main>
    </>
  );
};

export default ProductPage;
