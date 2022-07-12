import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br></br>
          <br></br>
          Hi there! Welcome to my react test!
          <br></br>
          Bye! This test was successful! Test!
        </p>
        <div>
          <p>
            Ein neues Div mit neuen Text!
            <div>
              Ein neues Div Element
            </div>
          </p>
        </div>
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
