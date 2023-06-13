import {  Button,ButtonGroup  } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
    <h1>Tournament Bracket Maker</h1>
        <ButtonGroup>
        <Button>
          <Link to="/" className="nav-link">Home</Link>
        </Button>
        <Button>
          <Link to="/tournament-bracket" className="nav-link">Tournament Bracket</Link>
        </Button>
        <Button>
          <Link to="/profile" className="nav-link">Profile</Link>
        </Button>        
        <Button>
          <Link to="/about" className="nav-link">About</Link>
        </Button>
        </ButtonGroup>
      </nav>
    </>
  );
}

export default Header;
