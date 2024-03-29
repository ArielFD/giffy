import React from "react";
import "./style.css";
import {Link} from 'wouter'

export default function Gif({ title, id, url }) {
  return (
    <div>
      <Link to={`/gif/${id}`} >
        <h4>{title}</h4>
        <img loading="lazy" src={url} alt={title} className="Gif-link"/>
      </Link>
    </div>
  );
}
