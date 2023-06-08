import { AppBar, Button,ButtonGroup  } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <AppBar>
    <h1>Tournament Bracket Maker</h1>
        <ButtonGroup variant="text" aria-label="text button group">
        <Button>
          <Link to="/" className="nav-link">Home</Link>
        </Button>
        <Button>
          <Link to="/tournament-bracket" className="nav-link">Tournament Bracket</Link>
        </Button>
        <Button>
          <Link to="/profile" className="nav-link">Profile</Link>
        </Button>
        </ButtonGroup>
      </AppBar>
      <br/>
    </>
  );
}

export default Header;
