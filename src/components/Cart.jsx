import { useContext, useEffect } from "react";
import { SlClose } from "react-icons/sl";
import { AppContext } from "../context/Provider";
import { useState } from "react";
import { toast } from "react-toastify";

const Cart = () => {
  const { price, cartItems, allData, setCartItems, setPrice } =
    useContext(AppContext);
  const [prodect, setProdect] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (allData.length > 0 && cartItems.length > 0) {
      const matchedProducts = allData.filter((item) =>
        cartItems.includes(item.product_id)
      );
      setProdect(matchedProducts);
    }
  }, [allData, cartItems]);

  const handleRemoveFromCart = (productId) => {
    const removedItem = allData.find((item) => item.product_id === productId);

    const updatedCart = cartItems.filter((id) => id !== productId);
    setCartItems(updatedCart);

    const updatedProducts = prodect.filter((p) => p.product_id !== productId);
    setProdect(updatedProducts);

    setPrice((prev) => prev - removedItem.price);
  };

  const handlePurchase = () => {
    if (cartItems.length === 0) {
      toast.info("🛒 Your cart is empty.");
      return;
    }

    // Show modal instead of toast
    setShowModal(true);

    // Clear cart data
    setCartItems([]);
    setProdect([]);
    setPrice(0);
  };

  console.log(prodect);

  return (
    <div>
      <div className="flex justify-between my-5">
        <h1 className="font-medium text-2xl">Card</h1>
        <div className="flex gap-5 items-center">
          <h1 className="font-medium">
            Totale price: $<span>{price}</span>
          </h1>
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 text-center">
                <h2 className="text-2xl font-bold text-green-600 mb-4">
                  🎉 Purchase Successful!
                </h2>
                <p className="text-gray-700 mb-6">
                  Thank you for your purchase.
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full"
                >
                  Close
                </button>
              </div>
            </div>
          )}
          <button onClick={handlePurchase} className="py-2 px-8 bg-purple-500 text-white rounded-2xl cursor-pointer">
            Purchase
          </button>
        </div>
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

export default Cart;
