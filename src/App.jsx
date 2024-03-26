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
    // Vérifier si le repas existe déjà dans le panier
    const existingMealIndex = panier.findIndex((item) => item.id === meal.id);

    if (existingMealIndex !== -1) {
      // Si le repas existe déjà, augmenter simplement sa quantité
      const updatedPanier = [...panier];
      updatedPanier[existingMealIndex].quantity += 1;
      setPanier(updatedPanier);
    } else {
      // Si le repas n'existe pas encore dans le panier, l'ajouter avec une quantité de 1
      const newMeal = { ...meal, quantity: 1 };
      setPanier([...panier, newMeal]);
    }
  };

  return (
    <>
      <Header />
      <Menu
        categoriesData={categoriesData}
        isLoading={isLoading}
        addToCart={addToCart}
        panier={panier}
      />
      <PetitPanier />
    </>
  );
};

export default App;
