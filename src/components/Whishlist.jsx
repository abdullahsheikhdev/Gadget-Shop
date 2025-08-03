import { useContext, useEffect } from "react";
import { SlClose } from "react-icons/sl";
import { AppContext } from "../context/Provider";
import { useState } from "react";
import { toast } from "react-toastify";

const Whishlist = () => {
  const {
    favorites,
    allData,
    setFavorites,
    setPrice,
    cartItems,
    setCartItems,
  } = useContext(AppContext);
  const [prodect, setProdect] = useState([]);

  useEffect(() => {
    if (allData.length > 0 && favorites.length > 0) {
      const matchedProducts = allData.filter((item) =>
        favorites.includes(item.product_id)
      );
      setProdect(matchedProducts);
    }
  }, [allData, favorites]);

  const handleRemoveFromCart = (productId) => {
    const removedItem = allData.find((item) => item.product_id === productId);

    const updatedCart = favorites.filter((id) => id !== productId);
    setFavorites(updatedCart);

    const updatedProducts = prodect.filter((p) => p.product_id !== productId);
    setProdect(updatedProducts);

    setPrice((prev) => prev - removedItem.price);
  };

  const handleAddToCart = (product) => {
    if (!cartItems.includes(product.product_id)) {
      setCartItems([...cartItems, product.product_id]);
      setPrice((prev) => prev + product.price);
      toast.success("✅ Added to cart");
    } else {
      toast.info("⚠️ Already in cart");
    }
  };

    const handlePurchase = () => {
    if (favorites.length === 0) {
      toast.info("🛒 Your cart is empty.");
      return;
    }
    // Clear cart data
    setFavorites([]);
    setProdect([]);
  };
  console.log(prodect);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-medium text-2xl">Whishlist</h1>
        <button onClick={handlePurchase} className="py-2 px-8 bg-red-500 text-white rounded-2xl cursor-pointer">
            All Delete
          </button>
      </div>
      {prodect.map((prod, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-8 flex items-center shadow-sm mx-2 my-4"
          style={{ minHeight: 200 }}
        >
          <div className="w-52 h-28 bg-gray-300 rounded-lg flex-shrink-0">
            <img
              src={prod.product_image}
              alt={prod.product_title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="ml-8 flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {prod.product_title}
            </h2>
            <p className="text-gray-500 mb-4">{prod.description}</p>
            <p className="text-lg font-semibold text-gray-800">
              <span className="font-bold">Price:</span> ${prod.price}
            </p>
            <button
              onClick={() => handleAddToCart(prod)}
              className="bg-purple-600 hover:bg-purple-700 text-white mt-5 px-8 py-2 rounded-full font-medium transition"
            >
              Add to Card
            </button>
          </div>

          <button
            onClick={() => handleRemoveFromCart(prod.product_id)}
            className="ml-8 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer text-2xl text-red-500 hover:bg-red-50 transition"
          >
            <SlClose />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Whishlist;
