import { useState } from "react";
import Icon from "../../../public/QuickCart_Icon.png";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/product/${product.id}`);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = product.images.length > 0 ? product.images : [Icon];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const [isFavHovered, setIsFavHovered] = useState(false);
  return (
    <>
      <div className="relative w-full max-w-xs bg-slate-50 border rounded-md shadow hover:shadow-lg transition">
        <div className=" relative w-full h-40 sm:h-48 md:h-56 overflow-hidden flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt="Product"
            className="object-cover w-full h-full rounded-md"
            onClick={navigateTo}
            key={`${product.id}-${currentIndex}`}
          />

          {/* Previous Images Handler */}

          {images.length > 1 && (
            <span
              onClick={handlePrev}
              className="absolute left-2 text-white bg-black/50 hover:bg-black/70 rounded-full p-1 cursor-pointer outline-none"
            >
              <span className="material-icons-outlined !text-xl outline-none">
                chevron_left
              </span>
            </span>
          )}

          {/* Next Image Handler */}
          {images.length > 1 && (
            <span
              onClick={handleNext}
              className="absolute right-2 text-white bg-black/50 hover:bg-black/70 rounded-full p-1 cursor-pointer outline-none"
            >
              <span className="material-icons-outlined !text-xl">
                chevron_right
              </span>
            </span>
          )}

          {images.length > 1 && (
            <div className="flex justify-center absolute gap-2 mt-2 top-2 left-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-cyan-500 scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        <span
          className={`material-icons absolute top-2 right-2 cursor-pointer transition-colors duration-200 !text-2xl ${
            isFavHovered ? "text-red-500" : "text-gray-600"
          }`}
          onMouseEnter={() => setIsFavHovered(true)}
          onMouseLeave={() => setIsFavHovered(false)}
        >
          {isFavHovered ? "favorite" : "favorite_border"}
        </span>
        <div className="p-4 space-y-2">
          <p className="text-gray-800 text-sm md:text-base font-semibold line-clamp-3" onClick={navigateTo} key={product.id}>
            {product.description}
          </p>
          <div className="flex items-center gap-1 text-sm bg-green-600 text-white px-2 py-0.5 rounded w-max">
            <span>4.1</span>
            <span className="material-icons text-base">star</span>
          </div>
          <div className="text-gray-700 text-sm">
            ₹New Price <s className="ml-2 text-gray-400">₹Old Price</s>
          </div>
          <div className="text-green-500 text-sm font-medium">discount%</div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
