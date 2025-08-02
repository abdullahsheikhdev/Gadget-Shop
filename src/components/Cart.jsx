import { useContext, useEffect } from "react";
import { SlClose } from "react-icons/sl";
import { AppContext } from "../context/Provider";
import { useState } from "react";

const Cart = () => {
  const { price, cartItems, allData, setCartItems, setPrice } =
    useContext(AppContext);
  const [prodect, setProdect] = useState([]);

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


  console.log(prodect);

  return (
    <div>
      <div className="flex justify-between my-5">
        <h1 className="font-medium text-2xl">Card</h1>
        <div className="flex gap-5 items-center">
          <h1 className="font-medium">
            Totale price: $<span>{price}</span>
          </h1>
          <button>Purchase</button>
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
