import React, { useContext } from "react";
import GifsContextProvider from "context/gifsContext";

export default function useGlobalGifs() {
  const { gifs } = useContext(GifsContextProvider);
  return gifs;
}
