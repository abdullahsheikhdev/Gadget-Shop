import Cart from "../components/Cart";
import Whishlist from "../components/Whishlist";
import { useContext } from "react";
import { AppContext } from "../context/Provider";

const Dashboard = () => {
  const {activeTab, setActiveTab} = useContext(AppContext); // default view

  return (
    <div>
      {/* Header Section */}
      <div className="bg-purple-500">
        <div className="container mx-auto text-center p-5">
          <h1 className="text-4xl text-white font-bold">Dashboard</h1>
          <p className="mt-5 text-white font-normal max-w-3xl mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>

          {/* Toggle Buttons */}
          <div className="space-x-5 my-10">
            <button
              onClick={() => setActiveTab("cart")}
              className={`py-2 px-14 cursor-pointer rounded-2xl font-extrabold ${
                activeTab === "cart"
                  ? "bg-white text-[#9538E2]"
                  : "bg-[#9538E2] text-white border border-white"
              }`}
            >
              Cart
            </button>
            <button
              onClick={() => setActiveTab("wishlist")}
              className={`py-2 px-10 cursor-pointer rounded-2xl ${
                activeTab === "wishlist"
                  ? "bg-white text-[#9538E2] font-extrabold"
                  : "bg-[#9538E2] text-white border border-white"
              }`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Component Output */}
      <div className="one container mx-auto my-10">
        {activeTab === "cart" && <Cart />}
        {activeTab === "wishlist" && <Whishlist />}
      </div>
    </div>
  );
};

export default Dashboard;
