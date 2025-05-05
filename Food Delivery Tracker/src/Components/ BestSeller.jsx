import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";
import "./BestSeller.css";

const BestSeller = () => {
  const { products } = useAppContext();
  return (
    <div className="best-seller-container">
      <p className="best-seller-title">Best Sellers</p>
      <div className="best-seller-grid">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;