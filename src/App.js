
import './App.css';
import React, { useState, useEffect } from 'react';
import Beer from './Beer';
function App() {
  const [beers, setBeers] = useState([])
  useEffect(() => {
    //
    fetch('https://api.punkapi.com/v2/beers')
      // (res) is the response from the fetch... "res.json" is turning it into a object "data"
      .then((res) => res.json())
      //data from line 9 is set as beers
      .then((data) => setBeers(data))


  }, [])
  {/* <ComponentName variable={data we want to send} /> */ }
  console.log(beers);
  return (
    <div>
      {beers.map((beer) => (
        <Beer beer={beer} />

      )

      )}


    </div>
  );
}

export default App;
