import { createContext, useContext, useState } from "react";

const initialvalue = "National Parks";
const CategoryContext = createContext(initialvalue);

const CategoryProvider = ({ children }) => {
  const [hotelCategory, setHotelCategory] = useState(initialvalue);

  return (
    <CategoryContext.Provider value={{ hotelCategory, setHotelCategory}}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider }; 