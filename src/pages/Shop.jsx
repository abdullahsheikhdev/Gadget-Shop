import Sidebar from "./Sidebar";
import AllProducts from "./AllProducts";
import { AppContext } from "../context/Provider";
import { useContext } from "react";

const Shop = () => {


  const { setSortOrder } = useContext(AppContext);

const handleSortChange = (e) => {
  setSortOrder(e.target.value);
};

  return (
    <div className="container mx-auto">
      <h1 className="mt-5 font-bold text-4xl text-center">
        Explore Cutting-Tech Gient
      </h1>
      <div className="flex justify-end">
        <label className="font-bold flex items-center" for="price">Store by: </label>
        <div className="ml-3">
          <select className="bg-gray-100 py-1.5 " id="price" onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
        </div>
      </div>
      <div className="grid grid-cols-5 mt-5 gap-5">
        <Sidebar />
        <div className="col-span-4">
          <AllProducts />
        </div>
      </div>
    </div>
  );
};

export default Shop;
