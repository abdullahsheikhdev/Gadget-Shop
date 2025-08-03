import { Link } from "react-router-dom";

const Cards = ({ card }) => {
  const { product_title, price, product_id,product_image } = card;
  return (
    <Link to={`/details/${product_id}`}>
      <div className="bg-white rounded-xl flex flex-col h-full shadow p-4 w-72">
        <div className="rounded-lg h-44 mb-4">
            <img
            src={product_image}
            alt={product_title}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
        <div className="font-semibold flex-grow text-lg mb-1">{product_title}</div>
        <div className="text-gray-500 mb-4">Price: ${price}</div>
        <button className="border border-purple-500 text-purple-600 rounded-full px-4 py-1 font-medium hover:bg-purple-50 transition">
          View Details
        </button>
      </div>
    </Link>
  );
};

export default Cards;
