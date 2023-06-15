import { Link } from "react-router-dom";
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <>
      <nav className="navbar">
        <h1 className="font-unbounded">Tournament Bracket Maker</h1>
        <div className="navbar-buttons">
          <button className="rounded-button">
            <Link to="/" className="nav-link">Home</Link>
          </button>
          <button className="rounded-button">
            <Link to="/tournament-bracket" className="nav-link">Tournament Bracket</Link>
          </button>
          <button className="rounded-button">
            <Link to="/profile" className="nav-link">Profile</Link>
          </button>        
          <button className="rounded-button">
            <Link to="/about" className="nav-link">About</Link>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;