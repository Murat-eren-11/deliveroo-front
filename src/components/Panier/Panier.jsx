import "./Panier.css";

const Panier = ({ panier, total, retraitProduit, addToCart }) => {
  return (
    <div className="cartepanier">
      <button className={panier.length > 0 ? "valider" : "pasvalider"}>
        Valider mon panier
      </button>
      {panier.length > 0 ? (
        <div className="paniergarni">
          {panier.map((meal) => (
            <div className="panierobjet" key={meal.id}>
              <div className="panierligne">
                <div className="paniercounter">
                  <span onClick={() => retraitProduit(meal)}>-</span>
                  <span>{meal.quantity}</span>
                  <span onClick={() => addToCart(meal)}>+</span>
                </div>
                <div className="panierobjetnom">{meal.title}</div>
                <div className="panierobjetprix">{meal.price}</div>
              </div>
            </div>
          ))}
          <div className="soustotaligne">
            <span className="soustotal">Sous-Total</span>
            <span className="soustotalprix">€</span>
          </div>
          <div className="livraison">
            <span className="fdp">Frais de Livraison</span>
            <span className="fdprix">2 €</span>
          </div>
          <div className="totaligne">
            <span className="total">Total</span>
            <span className="totalprix">{total + 2} €</span>
          </div>
        </div>
      ) : (
        <div className="paniervide">Votre Panier est vide</div>
      )}
    </div>
  );
};

export default Panier;
