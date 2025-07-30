import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";



const UniqueCategories = () => {
  const [allData,categories,setAllData,setCategories] = useContext(AppContext) 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/prodectData.json"); 
        const data = await response.json();

        setAllData(data);

        const categorySet = new Set();
        data.forEach(item => {
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
  }, [setAllData,setCategories]);

  return (
    <div>
        <h1>{allData.length}</h1>
        <h1>{categories.length}</h1>
    </div>
  );
};

export default UniqueCategories;
