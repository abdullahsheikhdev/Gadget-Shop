import { useParams } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Provider";
import { RatingWithGradient } from "../components/RatingWithGradient ";
import { toast } from "react-toastify";

const DetailsProdect = () => {
  const { id } = useParams();
  const { cartItems, setCartItems, favorites, setFavorites, allData, setPrice } =
    useContext(AppContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (allData.length > 0) {
      const product = allData.find((item) => item.product_id === id);
      setData(product);
    }
  }, [id, allData]);

  if (!data) {
    return (
      <div className="text-center py-20 text-lg font-semibold text-gray-600">
        Loading product details...
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!cartItems.includes(data.product_id)) {
      setCartItems([...cartItems, data.product_id]);
      setPrice(prev => prev + data.price);
      toast.success("✅ Added to cart");
    } else {
      toast.info("⚠️ Already in cart");
    }
  };

  const handleAddToFavorites = () => {
    if (!favorites.includes(data.product_id)) {
      setFavorites([...favorites, data.product_id]);
      toast.success("❤️ Added to favorites");
    } else {
      toast.info("⚠️ Already in favorites");
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div className="bg-purple-500">
        <div className="container mx-auto text-center p-5 h-[350px]">
          <h1 className="text-4xl text-white font-bold">Product Details</h1>
          <p className="mt-5 text-white font-normal max-w-3xl mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      {/* Main Product Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 flex max-w-5xl mx-auto -mt-44 mb-10 border-2 border-gray-100">
        {/* Product Image */}
        <div className="w-96 h-96 bg-gray-200 rounded-xl flex-shrink-0">
          <img
            src={data.product_image}
            alt={data.product_title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Product Details */}
        <div className="ml-10 flex flex-col justify-between flex-1">
          <div>
            <h2 className="text-3xl font-bold mb-2">{data.product_title}</h2>
            <p className="text-xl font-semibold mb-2">
              Price: <span className="font-bold">$ {data.price}</span>
            </p>
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm mb-4">
              {data.availability ? "In Stock" : "Out of Stock"}
            </span>
            <p className="text-gray-500 mb-4">{data.description}</p>

            {/* Specification */}
            {data.specification?.length > 0 && (
              <div className="mb-4">
                <span className="font-bold">Specification:</span>
                <ol className="list-decimal ml-6 mt-2 text-gray-700">
                  {data.specification.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>
            )}

            {/* Rating */}
            <div className="mb-4">
              <span className="font-bold">Rating</span>
              <span className="ml-1">⭐</span>
            </div>
            <div className=" my-2">
              <RatingWithGradient rating={data.rating} />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow transition"
            >
              Add To Cart <FaShoppingCart />
            </button>

            {/* Favorite Button */}
            <button
              onClick={handleAddToFavorites}
              className={`w-12 h-12 flex items-center justify-center border ${
                favorites.includes(data.product_id)
                  ? "bg-gray-200 text-black"
                  : "border-gray-300"
              } rounded-full hover:bg-gray-100 transition`}
            >
              <MdFavoriteBorder className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProdect;
