import "./Panier.css";

const Panier = () => {
  return (
    <div className="cartepanier">
      <button className="valider pasvalider">Valider mon panier</button>
      <div className="paniervide">Votre Panier est vide</div>
    </div>
  );
};

export default Panier;
