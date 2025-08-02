import { useContext } from "react";
import { SlClose } from "react-icons/sl";
import { AppContext } from "../context/Provider";

const Cart = () => {
    const {price} = useContext(AppContext)

    
  return (
    <div>
      <div className="flex justify-between my-5">
        <h1 className="font-medium text-2xl">Card</h1>
        <div className="flex gap-5 items-center">
            <h1 className="font-medium">Totale price: <span>{price}</span></h1>
            <button>Purchase</button>
        </div>
      </div>
      <div
        className="bg-white rounded-2xl p-8 flex items-center shadow-sm mx-2 my-4"
        style={{ minHeight: 200 }}
      >
        {/* Image Placeholder */}
        <div className="w-52 h-28 bg-gray-300 rounded-lg flex-shrink-0"></div>

        {/* Content */}
        <div className="ml-8 flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Samsung Galaxy S23 Ultra
          </h2>
          <p className="text-gray-500 mb-4">
            Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
            display.
          </p>
          <p className="text-lg font-semibold text-gray-800">
            <span className="font-bold">Price:</span> $ 999.99
          </p>
        </div>

        {/* Close Button */}
        <button className="ml-8 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer text-2xl text-red-500 hover:bg-red-50 transition">
          <SlClose />
        </button>
      </div>
    </div>
  );
};

export default Cart;
