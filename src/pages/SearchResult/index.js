import React, { useEffect, useState } from "react";
import ListOfGifs from "components/listOfGifs";
import { useGifs } from "hooks/useGifs";
import './style.css'

export default function SearchResult({ params }) {
  const { keyword } = params;
  const { loading, gifs,setPage } = useGifs({ keyword });

  const handlenextPage=()=> {
   setPage(prevPage=>prevPage+1)
  }
  
  return (
    <div>
      {loading ? (
        <p>Cargando!!!</p>
      ) : (
        <div>
          <h3>{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
        </div>
      )}

      <button onClick={handlenextPage}>Get Next Page</button>
    </div>
  );
}
