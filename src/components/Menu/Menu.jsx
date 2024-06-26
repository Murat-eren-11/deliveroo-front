import "./Menu.css";
import Menus from "../Menus/Menus";
import Panier from "../Panier/Panier";

const Menu = ({
  categoriesData,
  isLoading,
  addToCart,
  panier,
  ajoutProduit,
  retraitProduit,
  total,
}) => {
  return (
    <>
      <div className="contenu">
        <div className="contenucentre">
          <div className="menu">
            <Menus
              categories={categoriesData}
              isLoading={isLoading}
              addToCart={addToCart}
            />
          </div>
          <div className="panier">
            <Panier
              panier={panier}
              total={total}
              ajoutProduit={ajoutProduit}
              addToCart={addToCart}
              retraitProduit={retraitProduit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
