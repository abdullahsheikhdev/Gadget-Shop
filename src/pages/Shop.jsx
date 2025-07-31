import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";



const Shop = () => {
    return (
        <div>
            <h1 className="mt-5 font-bold text-4xl text-center">Explore Cutting-Tech Gient</h1>
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Shop;