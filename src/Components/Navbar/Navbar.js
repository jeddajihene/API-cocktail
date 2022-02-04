import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/Cocktails">CocktailList</Link>
        </li>
        <li>
          <Link to="/AboutUs">AboutUs</Link>
        </li>
      </ul>
      <input type="text" onChange={(e) => props.setText(e.target.value)} />
    </div>
  );
};

export default Navbar;
