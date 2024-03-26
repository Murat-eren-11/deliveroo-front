import "./Plats.css";

const Plats = ({ meals, addToCart }) => {
  const handleAddToCart = (meal) => {
    addToCart(meal);
  };
  return (
    <div className="platligne">
      {meals.map((meal, index) => (
        <div className="plats" key={index}>
          <div className="carteplat" onClick={() => handleAddToCart(meal)}>
            <div className="textplat">
              <h3>{meal.title}</h3>
              <p>{meal.description}</p>
              <div className="infoplat">
                <span className="prixplat">
                  {parseFloat(meal.price).toFixed(2)} €
                </span>
                <span className={meal.popular ? "pop" : "hidden"}>
                  ⭐ Populaire
                </span>
              </div>
            </div>
            {meal.picture && (
              <div className="imageplat">
                <img src={meal.picture} alt={meal.title} className="imgplat" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plats;
