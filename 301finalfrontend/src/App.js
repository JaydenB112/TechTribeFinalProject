import logo from './logo.svg';
import './App.css';
import Header from './Componets/Header';
import Home from './Componets/Home';
import Profile from './Componets/Profile';
import TournamentBracket from './Componets/TournamentBracket';
import Footer from './Componets/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
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
      <Footer/>
    </div>
  );
}

export default App;
