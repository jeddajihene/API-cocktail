import React, { useEffect, useState } from "react";
import axios from "axios";
import CocktailCard from "../../Components/CocktailCard/CocktailCard";
const CocktailList = ({ Text }) => {
  const [loading, setloading] = useState(false);
  const [Errors, setErrors] = useState(false);
  const [CocktailList, setCocktailList] = useState([]);
  const getCocktails = async () => {
    try {
      setloading(true);
      const reponse = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${Text}`
      );
      setloading(false);
      setCocktailList(reponse.data.drinks);
    } catch (error) {
      setloading(false);
      setErrors(true);
    }
  };
  useEffect(() => {
    getCocktails();
  }, [Text]);

  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : Errors ? (
        <h1>can not get data </h1>
      ) : CocktailList == null ? (
        <h1> no Cocktail match</h1>
      ) : (
        CocktailList.map((Cocktail) => (
          <CocktailCard Cocktail={Cocktail} key={Cocktail.idDrink} />
        ))
      )}
    </div>
  );
};

export default CocktailList;
