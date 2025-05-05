import React from "react";
import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import "./Categories.css";

const Categories = () => {
  const { navigate } = useAppContext();
  return (
    <div className="categories-section">
      <p className="categories-heading">Categories</p>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-item"
            style={{ background: category.bgColor }}
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
          >
            <img
              src={category.image}
              alt={category.text}
              className="category-image"
            />
            <p className="category-text">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;