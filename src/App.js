// import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import getGifs from './services/getGifs';


function App() {
  const [gifs,setGifs]=useState([])

  useEffect(function(){
    getGifs({keyword:'rick'}).then(gifs=>setGifs(gifs))
  },[])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif=><img src={singleGif} alt=''/>)
        }
        
      </section>
    </div>
  );
}

export default App;
