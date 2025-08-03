import { useEffect, useState } from "react";
import { AppContext } from "./Provider";

export const AppProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("All");
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [price, setPrice] = useState(0);
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState("cart");
  const [sortOrder, setSortOrder] = useState("default");

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

  console.log(price);

  const value = {
    allData,
    setAllData,
    categories,
    setCategories,
    selected,
    setSelected,
    cartItems,
    setCartItems,
    favorites,
    setFavorites,
    price,
    setPrice,
    activeTab,
    setActiveTab,
    data,
    setData,
    sortOrder, 
    setSortOrder,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
