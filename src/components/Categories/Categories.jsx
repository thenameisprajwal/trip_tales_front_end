import axios from "axios";
import { useEffect, useState } from "react";
import { useCategory } from "../../context";
import "./Categories.css";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [numberOfCategoryToShow, setNumberOfCategoryToShow] = useState(0);
  const { hotelCategory, setHotelCategory } = useCategory();

  const handleShowMoreRightClick = () => {
    setNumberOfCategoryToShow((prev) => prev + 10);
  };

  const handleShowMoreLeftClick = () => {
    setNumberOfCategoryToShow((prev) => prev - 10);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:3500/api/categories");
        const start =
          numberOfCategoryToShow + 10 > res.data.length
            ? res.data.length - 10
            : numberOfCategoryToShow;
        const end =
          numberOfCategoryToShow > res.data.length
            ? res.data.length
            : numberOfCategoryToShow + 10;
        const categoriesToShow = res.data.slice(start, end);
        setCategories(categoriesToShow);
      } catch (err) {
        console.error("❌ Error fetching categories:", err.message);
      }
    })();
  }, [numberOfCategoryToShow]);

  const handleCategoryClick = (category) => {
    setHotelCategory(category);
    console.log({
      hotelCategory: category, // ✅ will now log the clicked category
    });
  };

  return (
    <section className="categories d-flex align-center gap-large cursor-pointer">
      {numberOfCategoryToShow >= 10 && (
        <button
          className="button btn-category"
          onClick={handleShowMoreLeftClick}
        >
          <span className="material-icons-outlined">chevron_left</span>
        </button>
      )}

      {categories &&
  categories.map(({ category }, idx) => (
    <span
      key={idx}
      onClick={() => handleCategoryClick(category)}
      className={`item ${category === hotelCategory ? "active-category" : ""}`}
    >
      {category}
    </span>
  ))}



      {numberOfCategoryToShow + 10 < 50 && (
        <button
          className="button btn-category"
          onClick={handleShowMoreRightClick}
        >
          <span className="material-icons-outlined">chevron_right</span>
        </button>
      )}
    </section>
  );
};
