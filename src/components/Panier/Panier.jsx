import "./Panier.css";

const Panier = ({ panier }) => {
  const total = panier.reduce((acc, item) => acc + item.price, 0);
  const fraisDeLivraison = 50;
  const totalAvecLivraison = total + fraisDeLivraison;

  return (
    <div className="cartepanier">
      <button className={panier.length > 0 ? "valider" : "pasvalider"}>
        Valider mon panier
      </button>
      {panier.length > 0 ? (
        <div className="paniergarni">
          {panier.map((item, index) => (
            <div className="panierobjet" key={index}>
              <div className="panierligne">
                <div className="paniercounter">
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </div>
                <div className="panierobjetnom">{item.name}</div>
                <div className="panierobjetprix">{item.price}</div>
              </div>
            </div>
          ))}
          <div className="soustotaligne">
            <span className="soustotal">Sous-Total</span>
            <span className="soustotalprix">{total} €</span>
          </div>
          <div className="livraison">
            <span className="fdp">Frais de Livraison</span>
            <span className="fdprix">{fraisDeLivraison} €</span>
          </div>
          <div className="totaligne">
            <span className="total">Total</span>
            <span className="totalprix">{totalAvecLivraison} €</span>
          </div>
        </div>
      ) : (
        <div className="paniervide">Votre Panier est vide</div>
      )}
    </div>
  );
};

export default Panier;
