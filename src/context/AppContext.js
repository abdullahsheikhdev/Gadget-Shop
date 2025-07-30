import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

  const [allData, setAllData] = useState([]);        
  const [categories, setCategories] = useState([]); 

  console.log(allData,categories);
  
 
    const value = {
      allData,
      setAllData,
      categories,
      setCategories,
    }
 
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};