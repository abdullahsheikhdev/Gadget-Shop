import { SlClose } from "react-icons/sl";


const Whishlist = () => {
  return (
    <div>
      <h1 className="my-10 font-medium text-2xl">Whishlist</h1>
      <div
        className="bg-white rounded-2xl p-6 flex items-center shadow-sm mx-2 my-4"
        style={{ minHeight: 240 }}
      >
        {/* Image Placeholder */}
        <div className="w-64 h-40 bg-gray-300 rounded-lg flex-shrink-0"></div>

        {/* Content */}
        <div className="ml-8 flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Dell XPS 13</h2>
          <p className="mb-2">
            <span className="font-bold">Description:</span>
            <span className="text-gray-500 ml-1">
              Ultra-slim, high-performance laptop with 13.4-inch InfinityEdge
              display.
            </span>
          </p>
          <p className="text-lg font-semibold text-gray-800 mb-4">
            <span className="font-bold">Price:</span> $ 999.99
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-full font-medium transition">
            Add to Card
          </button>
        </div>

        {/* Close Button */}
        <button className="ml-8 w-10 h-10 flex items-center justify-center rounded-full text-2xl text-red-500 hover:bg-red-50 transition">
          <SlClose />
        </button>
      </div>
    </div>
  );
};

export default Whishlist;
