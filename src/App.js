import logo from './logo.svg';
import './App.css';
import Tree from "./Entity/Tree";
import Leaf from "./Entity/Leaf";

function debug(){

  debugger;
}

function App() {
  const tree= new Tree();
  //debug();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
