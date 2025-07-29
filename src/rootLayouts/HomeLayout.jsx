import { Outlet } from "react-router-dom";
import Navebar from "../components/Navebar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-displayFont">
      <Navebar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
