import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Tree from "./Entity/Tree";

import Diagram from "./Components/Diagram";
const diagramContainerClass='diagram-container'


function App() {
  const tree= new Tree();
  tree.grow(30,3);
  //debug();
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <span>LCA</span>
      </header>
      <section className={diagramContainerClass}>
        <Diagram tree={tree} />
      </section>
    </div>
  );
}

export default App;
