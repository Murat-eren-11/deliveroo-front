import React from "react";
import "./Menu.css";
import Menus from "../Menus/Menus";
import Panier from "../Panier/Panier";

const Menu = ({ categoriesData, isLoading }) => {
  return (
    <>
      <div className="contenu">
        <div className="contenucentre">
          <div className="menu">
            <Menus categories={categoriesData} isLoading={isLoading} />
          </div>
          <div className="panier">
            <Panier />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
