import logo from './logo.svg';
import './App.css';

import Percept from '@perceptinsight/percept-js';

Percept.init("fe3626deb35c0735c2eeac2531ae05418b356d42dfac7d4e0864769f4916a8e2", {
  enableExperiment: true,
  autoTrackRuntimeErrors: true
});
Percept.setUserId('USERTEST1234');

function App() {
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
