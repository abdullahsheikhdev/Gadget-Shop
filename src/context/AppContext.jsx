import { useEffect, useState } from "react";
import { AppContext } from "./Provider";

export const AppProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/prodectData.json");
        const data = await response.json();

        setAllData(data);

        const categorySet = new Set();
        data.forEach((item) => {
          if (item.category) {
            categorySet.add(item.category);
          }
        });

        setCategories([...categorySet]);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [setAllData, setCategories]);

  const value = {
    allData,
    setAllData,
    categories,
    setCategories,
    selected,
    setSelected,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
