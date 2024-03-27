import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import axios from "axios";
import PetitPanier from "./components/PetitPanier/PetitPanier";

const App = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [panier, setPanier] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo--cbrn9sjblrrw.code.run/"
        );
        setCategoriesData(response.data.categories);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  const addToCart = (meal) => {
    const newCart = [...panier];

    let found = null;
    for (let i = 0; i < newCart.length; i++) {
      const cartElem = newCart[i];
      if (cartElem.id === meal.id) {
        found = cartElem;
        break;
      }
    }

    if (found !== null) {
      found.quantity++;
    } else {
      newCart.push({ ...meal, quantity: 1 });
    }
    setPanier(newCart);
  };

  const retraitProduit = (meal) => {
    const cartCopy = [...panier];
    const mealIsInCart = cartCopy.find((elem) => elem.id === meal.id);
    if (mealIsInCart.quantity === 1) {
      const indexOfMeal = panier.indexOf(mealIsInCart);
      cartCopy.splice(indexOfMeal, 1);
    } else {
      mealIsInCart.quantity--;
    }
    setPanier(cartCopy);
  };

  let total = 0;
  panier.forEach((meal) => {
    total += meal.price * meal.quantity;
  });

  return (
    <>
      <Header />
      <Menu
        categoriesData={categoriesData}
        isLoading={isLoading}
        addToCart={addToCart}
        panier={panier}
        total={total}
        retraitProduit={retraitProduit}
      />
      <PetitPanier />
    </>
  );
};

export default App;
