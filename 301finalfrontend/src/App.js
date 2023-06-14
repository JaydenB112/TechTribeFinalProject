import './App.css';
import Header from './Componets/Header';
import Home from './Componets/Home';
import Profile from './Componets/Profile';
import TournamentBracket from './Componets/TournamentBracket';
import Footer from './Componets/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0, Auth0Provider } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();
  const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const auth0ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  console.log(auth0ClientId)
  return (
    <Auth0Provider
    domain={auth0Domain}
    clientId={auth0ClientId}
    redirectUri={window.location.origin}
    >

      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/tournament-bracket' element={<TournamentBracket />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Auth0Provider>

  );
}

export default App;
