import { useContext } from "react";
import { AppContext } from "../context/Provider";

const Sidebar = () => {
  const { categories, selected, setSelected } = useContext(AppContext);

  const handleName = (category) => {
    console.log("Selected category:", category);
    setSelected(category);
  };

  return (
    <div className="shadow-sm p-10 my-5">
      <div
        onClick={() => handleName("All")}
        className={`p-2 cursor-pointer rounded-2xl mb-3 ${
          selected === "All" ? "bg-[#9538E2] text-white" : "bg-gray-200"
        }`}
      >
        <h1>All Category</h1>
      </div>

      {categories.map((resp, indx) => (
        <div
          key={indx}
          onClick={() => handleName(resp)}
          className={`p-2 cursor-pointer rounded-2xl mb-3 ${
            selected === resp ? "bg-[#9538E2] text-white" : "bg-gray-200"
          }`}
        >
          <h1>{resp}</h1>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
