import React from "react";
import { Link } from "react-router-dom";

const CocktailCard = ({ Cocktail }) => {
  return (
    <div>
      <h3>{Cocktail.strDrink}</h3>

      <img
        class="haroun"
        src={Cocktail.strDrinkThumb}
        alt={Cocktail.strDrink}
        width={200}
      />
      <Link to={`/Cocktails/${Cocktail.idDrink}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default CocktailCard;
