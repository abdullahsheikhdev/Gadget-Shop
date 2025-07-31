import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 px-4">
      <h1 className="text-7xl font-bold text-purple-600">404</h1>
      <p className="text-2xl mt-4">Oops! Page not found.</p>
      <p className="text-lg text-gray-600 mt-2 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
