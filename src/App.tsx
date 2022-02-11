import React from 'react';
import './App.css';
import {useSelector} from "react-redux";

function App() {

    const state = useSelector((state => state))
    console.log(state)
  return (
    <div className="App">
      hello!
    </div>
  );
}

export default App;
