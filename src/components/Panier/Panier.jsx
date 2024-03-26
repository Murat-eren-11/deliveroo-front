import { useState, useEffect } from "react";
import "./Panier.css";

const Panier = ({ panier }) => {
  const [sousTotal, setSousTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [panierState, setPanier] = useState(panier);

  useEffect(() => {
    const newSousTotal = panier.reduce(
      (total, item) => total + parseFloat(item.price) * item.quantity,
      0
    );
    const newTotal = newSousTotal + 50;

    setSousTotal(newSousTotal);
    setTotal(newTotal);
  }, [panier]);

  useEffect(() => {
    setPanier(panier);
  }, [panier]);

  const retirerDuPanier = (index) => {
    const newPanier = [...panierState];
    console.log("Panier avant retrait :", newPanier); // Vérifier le panier avant la modification
    const item = newPanier[index];
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        newPanier.splice(index, 1); // Supprimer l'élément du panier
      }
      setPanier(newPanier);
      console.log("Panier après retrait :", newPanier); // Vérifier le panier après la modification
      // Reste du code...
    } else {
      console.error("Item not found in panierState array");
    }
  };

  const ajouterAuPanier = (index) => {
    const newPanier = [...panierState];
    console.log("Panier avant ajout :", newPanier); // Vérifier le panier avant la modification

    const item = newPanier[index];
    if (item) {
      const itemIndex = newPanier.findIndex((i) => i.title === item.title);
      if (itemIndex !== -1) {
        newPanier[itemIndex].quantity += 1;
        setPanier(newPanier);
      } else {
        newPanier.push({ ...item, quantity: 1 });
        setPanier(newPanier);
      }
      console.log("Panier après ajout :", newPanier); // Vérifier le panier après la modification
    } else {
      console.error("Item not found in panierState array");
    }
  };
  return (
    <div className="cartepanier">
      <button className={panier.length > 0 ? "valider" : "pasvalider"}>
        Valider mon panier
      </button>
      {panierState.length > 0 ? (
        <div className="paniergarni">
          {panier.map((item, index) => (
            <div className="panierobjet" key={index}>
              <div className="panierligne">
                <div className="paniercounter">
                  <span onClick={() => retirerDuPanier(index)}>-</span>
                  <span>{item.quantity}</span>
                  <span onClick={() => ajouterAuPanier(index)}>+</span>
                </div>
                <div className="panierobjetnom">{item.title}</div>
                <div className="panierobjetprix">
                  {(parseFloat(item.price) * item.quantity).toFixed(2)} €
                </div>
              </div>
            </div>
          ))}
          <div className="soustotaligne">
            <span className="soustotal">Sous-Total</span>
            <span className="soustotalprix">{sousTotal.toFixed(2)} €</span>
          </div>
          <div className="livraison">
            <span className="fdp">Frais de Livraison</span>
            <span className="fdprix">50 €</span>
          </div>
          <div className="totaligne">
            <span className="total">Total</span>
            <span className="totalprix">{total.toFixed(2)} €</span>
          </div>
        </div>
      ) : (
        <div className="paniervide">Votre Panier est vide</div>
      )}
    </div>
  );
};

export default Panier;
