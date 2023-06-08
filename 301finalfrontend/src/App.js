import './App.css';
import Header from './Componets/Header';
import Home from './Componets/Home';
import Profile from './Componets/Profile';
import TournamentBracket from './Componets/TournamentBracket';
import Footer from './Componets/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/tournament-bracket' element={<TournamentBracket/>} />
          </Routes>
        </Header>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
