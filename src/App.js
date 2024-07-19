import logo from './logo.svg';
import './App.css';

import Percept from '@perceptinsight/percept-js';

Percept.init("5ec4bee37bc21c5b9e35b01cb892a61773b4ce55a95167cd58e84f7f42f68d82", {
  autoTrackRuntimeErrors: true,
  enableExperiment: true,
});

Percept.setUserId("Jeevesh001");

function handleClick() {
  Percept.capture('Dummy Event Ford', { screen_name: 'FordScreen' });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="App-button"
          onClick={handleClick}
        >
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
