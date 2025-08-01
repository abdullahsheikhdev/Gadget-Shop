import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Provider";
import Cards from "../components/Cards";

const AllProducts = () => {
  const { allData, selected } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (allData.length > 0) {
        if (selected === "All") {
          setData(allData);
        } else {
          const d = allData.filter((rest) => rest.category === selected);
          setData(d);
        }
      }
      setLoading(false);
    }, 1000);
  }, [allData, selected]);

  return (
    <div>
      {loading ? (
        <div className="text-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <span className="text-purple-500 font-semibold">Loading...</span>
        </div>
      ) : (
        <div className="grid grid-cols-4 my-4 gap-4">
          {
            data.map((rest, indx) => (
            <Cards key={indx} card={rest} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
