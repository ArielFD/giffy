import React, { useEffect, useState,useRef } from "react";
import getTrending from "../../services/getTrending"
import Category from "../Category";


export default function TrendingSearches() {
    const [trends,setTrends]=useState([])

    useEffect(function(){
        getTrending().then(setTrends)
    },[])

    return <Category name="Trending" opcion={trends}/>
}