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
    setPanier([...panier, meal]);
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
