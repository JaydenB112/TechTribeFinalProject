import { Button, ButtonGroup } from "@mui/material";
import { Bracket, RoundProps } from 'react-brackets';
import React from 'react';



function TournamentBracket() {
  return (
    <div>
      <p>Tournament</p>
      <ButtonGroup variant="contained">
        <Button color="success"> make tournament</Button>
        <Button>remake tournament</Button>
        <Button color="error">clear tournament</Button>
      </ButtonGroup>
    </div>
  );
}

export default TournamentBracket;
