import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Pages/AboutUs/AboutUs";
import CocktailDetails from "./Pages/CocktailDetails/CocktailDetails";
import CocktailList from "./Pages/CocktailList/CocktailList";
import Errors from "./Pages/Errors/Errors";
import Home from "./Pages/Home/Home";

function App() {
  const [Text, setText] = useState("");
  return (
    <div className="App">
      <Navbar setText={setText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cocktails" element={<CocktailList Text={Text} />} />
        <Route path="/Cocktails/:id" element={<CocktailDetails />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="/*" element={<Errors />} />
      </Routes>
    </div>
  );
}

export default App;
