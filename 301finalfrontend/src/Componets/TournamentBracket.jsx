// import { Button, ButtonGroup } from "@mui/material";
import TournamentForm from "./TournamentForm";


function TournamentBracket() {
  return (
    <div>
      <p>Tournament</p>
      {/* <ButtonGroup variant="contained">
        <Button>remake tournament</Button>
        <Button color="error">clear tournament</Button>
      </ButtonGroup> */}
        <TournamentForm/>
    </div>
  );
}

export default TournamentBracket;
