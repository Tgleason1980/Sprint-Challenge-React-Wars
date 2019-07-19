import React, {useState, useEffect} from "react";
import axios from 'axios';
import './App.css';
import Card from "./components/Card";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    const [starwarsData, setStarwarsData] = useState();
    
    useEffect(() => {
    
        axios.get('https://swapi.co/api/people/')
        .then(res => {
            setStarwarsData(res.data.results)
        })
        .catch(err => console.log(err));
    
    },[])
    console.log(starwarsData);
    if (!starwarsData){
      return <h1>Loading</h1>
    }else{
      return (
        <div className="App">
           <h1 className="Header">React Wars</h1> 
          {starwarsData.map((person, index)=><Card person={person} key={index}/> )}
        </div>
      );
    }
}

export default App;
