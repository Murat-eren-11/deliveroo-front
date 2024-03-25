import { useState, useEffect } from "react";
import "./Menus.css";
import axios from "axios";
import Plats from "../Plats/Plats";

const Menus = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo--cbrn9sjblrrw.code.run/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>Attends un peu frère</span>
  ) : (
    <>
      {data.categories.map((category, index) => (
        <div className="categories" key={index}>
          <h2>{category.name}</h2>
          <Plats meals={category.meals} />
        </div>
      ))}
    </>
  );
};
export default Menus;
