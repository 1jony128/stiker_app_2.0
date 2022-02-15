import React from 'react';
import './App.css';
import './accept/scss/app.scss'
import {useSelector} from "react-redux";
import Main from "./components/Main/Main";

function App() {


  return (
    <div className="App">
        <Main />
    </div>
  );
}

export default App;
