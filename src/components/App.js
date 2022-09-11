import React, {Component, useState} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import '../styles/App.css';
import Signup from "./signup";
import Done from "./done";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Signup/>}></Route>
        <Route path="/done" element={<Done/>}></Route>
      </Routes>
      </BrowserRouter>
     
      </div>
  )
}


export default App;
