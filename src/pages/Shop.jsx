import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import AllProducts from "./AllProducts";

const Shop = () => {
  return (
    <div className="container mx-auto">
      <h1 className="mt-5 font-bold text-4xl text-center">
        Explore Cutting-Tech Gient
      </h1>
      <div className="grid grid-cols-5 mt-5">
        <Sidebar />
        <div className="col-span-4">
          <AllProducts />
        </div>
      </div>
    </div>
  );
};

export default Shop;
