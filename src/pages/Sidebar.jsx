import { useContext } from "react";
import { AppContext } from "../context/Provider";

const Sidebar = () => {
  const {categories} = useContext(AppContext);
  console.log(categories);
  

  const handelName = () => {
    console.log("hello");
    
  }
  return (
    <div className="shadow-sm  p-10">
      <div onClick={handelName} className="bg-gray-200 p-2 cursor-pointer rounded-2xl">
        <h1>All Catagory</h1>
        {
          categories?.map((resp,indx) => (
            <h1 key={indx}>{resp}</h1>
          ))
        }
      </div>
    </div>
  );
};

export default Sidebar;
