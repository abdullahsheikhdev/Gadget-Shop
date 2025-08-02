import { MdFavoriteBorder } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/Provider";

const Navebar = () => {
  const navelink = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const ishome = location.pathname === "/";
  const { favorites, cartItems } = useContext(AppContext);

  return (
    <div
      className={`${
        ishome ? "bg-[#9538E2] mx-2 mt-1 rounded-t-2xl" : "bg-white "
      }`}
    >
      <div className="container mx-auto">
        <div
          className={`navbar flex justify-between items-center py-4 ${
            ishome ? "bg-[#9538E2] mx-2 text-white" : "bg-white text-black"
          }`}
        >
          {/* Logo */}
          <div>
            <a
              onClick={() => navelink("/")}
              className="cursor-context-menu text-2xl font-bold"
            >
              Tech Gient
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
              ☰
            </button>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex gap-6 font-semibold ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/dashbord">Dashboard</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
          </nav>

          {/* Right-side Cart/Favorite */}
          <div className="hidden md:flex gap-4 items-center">
            {/* Cart */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle border border-gray-400 bg-white text-black"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item -mt-2 border border-gray-200">
                    {cartItems.length}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="dropdown-content bg-base-100 z-10 mt-3 w-52 shadow card card-compact"
              >
                <div className="card-body">
                  <span className="text-lg font-bold text-black">
                    {cartItems.length} Items
                  </span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <NavLink to={"/dashbord"}>
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Favorite */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle border border-gray-400 bg-white text-black"
              >
                <div className="indicator">
                  <MdFavoriteBorder className="h-5 w-5" />
                  <span className="badge badge-sm indicator-item -mt-2 border border-gray-200">
                    {favorites.length}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="dropdown-content bg-base-100 z-10 mt-3 w-52 shadow card card-compact"
              >
                <div className="card-body">
                  <span className="text-lg font-bold text-black">
                    {favorites.length} Items
                  </span>
                  <div className="card-actions">
                    <NavLink to={"/dashbord"}>
                      <button className="btn btn-primary btn-block">
                        View favorites
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-2 space-y-2 bg-gray-100 px-4 py-2 rounded-md font-semibold">
            <div className="">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/shop">Shop</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/statistics">Statistics</NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navebar;
