import { Button, ButtonGroup } from "@mui/material";
import TournamentForm from "./TournamentForm";
import BrackDisplay from "./BracketDisplay";


function TournamentBracket() {
  return (
    <div>
      <p>Tournament</p>
      <ButtonGroup variant="contained">
        <TournamentForm/>
        <Button>remake tournament</Button>
        <Button color="error">clear tournament</Button>
      </ButtonGroup>
      <BrackDisplay/>
    </div>
  );
}

export default TournamentBracket;
