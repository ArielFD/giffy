import { useContext, useEffect, useState } from "react";
import getGifs from "services/getGifs";
import GifsContextProvider from "context/gifsContext";

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContextProvider);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [loadingNextpage, setLoadingNextpage] = useState(false);

  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(
    function () {
      setLoading(true);
      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setLoading(false);
        setGifs(gifs);
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword, keywordToUse, setGifs]
  );

  useEffect(
    function () {
      if (page === INITIAL_PAGE)
        return 
        setLoadingNextpage(true)
        getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
          setGifs((prevGifs) => prevGifs.concat(nextGifs));
          setLoadingNextpage(false)
        });
    },
    [keywordToUse, page]
  );

  return { loading, loadingNextpage, gifs, setPage };
}
