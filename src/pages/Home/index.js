import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import "./style.css";
import { useGifs } from "hooks/useGifs";
import ListOfGifs from "components/listOfGifs/index";
import Category from "components/Category";
import TrendingSearches from "components/trending";

const POPULAR_GIFS = ["Matrix", "Cuba", "Habana", "Ariel"];

export default function Home() {
  const [keyword, setkeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setkeyword(evt.target.value);
  };

  return (
    <div className="App-Div">
      <form onSubmit={handleSubmit} className="App-Form">
        <button>Buscar</button>
        <input
          placeholder="escribe el gif aqui..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
        
      </form>
      <div className="App-Div2">
      <h5 className="App-tittle">Ultima busqueda</h5>
        <div>{loading ? <p>Cargando!!!</p> : <ListOfGifs gifs={gifs} />}</div>
        <div className="App-Div3">
        <Category name="Categorias populares" opcion={POPULAR_GIFS}/>
        <TrendingSearches/>
        </div>
        
      </div>
    </div>
  );
}
