import logo from './logo.svg';
import './App.css';

import Percept from '@perceptinsight/percept-js';

Percept.init("fe3626deb35c0735c2eeac2531ae05418b356d42dfac7d4e0864769f4916a8e2", {
  autoTrackRuntimeErrors: true,
  enableExperiment: true,
});

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
