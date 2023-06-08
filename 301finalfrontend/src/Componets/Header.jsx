import { AppBar, Button,ButtonGroup  } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
      <AppBar>
        <ButtonGroup>
        <Button variant="text">
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
  );
}

export default Header;
