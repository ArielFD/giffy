// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Home from "./pages/Home/";
import Detail from "./pages/Detail";
import SearchResult from "./pages/SearchResult";
import { Link, Route } from "wouter";
import StaticContext from "./context/staticContext";
import { GifsContextProvider } from "./context/gifsContext";
function App() {
  return (
    <StaticContext.Provider value={{ name: "ariel", suscribete: true }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img
              className="App-logo"
              alt="Giffy log"
              src="/public/logo512.png"
            />
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={Detail} path="/gif/:id" />
            <Route component={SearchResult} path="/search/:keyword" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
