import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Diagram from "./Components/Diagram";

const diagramContainerClass='diagram-container'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                  <span>LCA</span>
            </header>
            <section className={diagramContainerClass}>
                <Diagram leafs={15} maxChildrenNodes={3}/>
            </section>
        </div>
      );
}

export default App;
