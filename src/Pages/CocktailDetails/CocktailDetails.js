import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
const CocktailDetails = () => {
  const [loading, setloading] = useState(false);
  const [Errors, setErrors] = useState(false);
  const [Cocktail, setCocktail] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const getCocktail = async () => {
    setloading(true);

    try {
      let response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setloading(false);
      setCocktail(response.data.drinks[0]);
    } catch (error) {
      setErrors(true);
      setloading(false);
    }
  };
  useEffect(() => {
    getCocktail();
  }, []);

  return (
    <div>
      {loading ? (
        <h1> LOADING........</h1>
      ) : Errors ? (
        <h1>errors to get the data</h1>
      ) : (
        <div>
          <h3>{Cocktail.strDrink} </h3>
        </div>
      )}
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default CocktailDetails;
