import React from "react";
import {Link} from 'wouter'
import "./style.css";

export default function Category({ name, opcion}) {
  return (
    <div>
      <h5 className="App-tittle">{name}</h5>
        <ul className="App-List">
          {opcion.map((popularGif) => (
            <li key={popularGif}>
              <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
            </li>
          ))}
        </ul>
    </div>
  );
}