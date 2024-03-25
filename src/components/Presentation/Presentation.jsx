import "./Presentation.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Presentation = () => {
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
    <span>Chargiiiiiiiiiing</span>
  ) : (
    <>
      <div className="inforestocontainer">
        <div className="inforesto">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
        <img src={data.restaurant.picture} className="imageresto" alt="" />
      </div>
    </>
  );
};
export default Presentation;
