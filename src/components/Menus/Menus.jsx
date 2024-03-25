import React from "react";
import "./Menus.css";
import Plats from "../Plats/Plats";

const Menus = ({ categories, isLoading }) => {
  if (isLoading) {
    return <span>Attends un peu frère</span>;
  }
  const categorieVide = categories.filter(
    (category) => category.meals.length > 0
  );

  return (
    <>
      {categorieVide.map((category, index) => (
        <div className="categories" key={index}>
          <h2>{category.name}</h2>
          <Plats meals={category.meals} />
        </div>
      ))}
    </>
  );
};

export default Menus;
