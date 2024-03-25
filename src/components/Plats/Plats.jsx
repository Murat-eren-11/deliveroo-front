import "./Plats.css";

const Plats = ({ meals }) => {
  return (
    <div className="platligne">
      {meals.map((meal, index) => (
        <div className="plats" key={index}>
          <div className="carteplat">
            <div className="textplat">
              <h3>{meal.title}</h3>
              <p>{meal.description}</p>
              <div className="infoplat">
                <span className="prixplat">{meal.price} €</span>
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
