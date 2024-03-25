import "./Menu.css";
import Menus from "../Menus/Menus";
import Panier from "../Panier/Panier";
const Menu = () => {
  return (
    <>
      <div className="contenu">
        <div className="contenucentre">
          <div className="menu">
            <Menus />
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
