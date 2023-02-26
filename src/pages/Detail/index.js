import React, { useContext } from "react";
import Gif from "../../components/Gif";
import GifsContextProvider from "context/gifsContext";
import useGlobalGifs from "hooks/useGlobalGifs";

export default function Detail({ params }) {
  const gifsGlobal=useGlobalGifs()
  console.log(gifsGlobal);

  const { gifs } = useContext(GifsContextProvider);
  console.log(gifs);

  const gif = gifs.find((singleGif) => singleGif.id === params.id);
  console.log(gif);

  const gifGlobal = gifsGlobal.find((singleGif) => singleGif.id === params.id);
  console.log(gifsGlobal);

  return (
    <div>Pasando Contex
      <Gif {...gif} />Pasando Contex de forma global
      <Gif {...gifGlobal} />Pasando los datos 
      <Gif key={gif.id} title={gif.title} url={gif.url} id={gif.id} />
      {/* <h1>GIF con id {params.id}</h1>) */}
    </div>
  );
}
