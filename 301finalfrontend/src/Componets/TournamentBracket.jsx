import { useState } from "react";
import Winner from "./Winner";
import TournamentForm from "./TournamentForm";
import Rounds from "./Brack/Rounds";
import { Container, Grid, Typography } from "@mui/material";

function TournamentBracket() {
  const [winner, setWinner] = useState("");
  const [players, setPlayers] = useState([]);
  let numberOfPlayers = players.length;
  let numberOfRounds = Math.log2(numberOfPlayers);
  let rounds = [];

  const advancePlayer = (playerName) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      const playerIndex = updatedPlayers.findIndex(
        (player) => player.name === playerName
      );

      if (playerIndex !== -1) {
        const player = { ...updatedPlayers[playerIndex] };
        player.round += 1;
        if (player.round === numberOfRounds) {
          setWinner(player.name);
          return updatedPlayers;
        }
        // Store the original position before updating
        player.originalPosition = player.position;

        player.position = Math.floor(player.position / 2);
        console.log(player);
        updatedPlayers[playerIndex] = player;
      }

      return updatedPlayers;
    });
  };

  const retreatPlayer = (playerName) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      const playerIndex = updatedPlayers.findIndex(
        (player) => player.name === playerName
      );

      if (playerIndex !== -1) {
        const player = { ...updatedPlayers[playerIndex] };
        const previousRound = player.round - 1;

        if (previousRound >= 0) {
          player.round = previousRound;
          player.position = player.originalPosition;
          updatedPlayers[playerIndex] = player;
        }
      }

      return updatedPlayers;
    });
  };

  for (let i = 0; i < numberOfRounds; i++) {
    rounds.push(
      <Rounds
        round={i}
        players={players}
        numOfMatches={numberOfPlayers / Math.pow(2, i + 1)}
        advancePlayer={advancePlayer}
        retreatPlayer={retreatPlayer}
      />
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Tournament
      </Typography>

      {players.length > 0 ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1" gutterBottom>
              Tournament
            </Typography>
          </Grid>

          <Grid container item xs={12} spacing={2}>
            {rounds.map((round, index) => (
              <Grid key={index} item xs={3}>
                {round}
              </Grid>
            ))}

            <Grid item xs={3}>
              {winner ? <Winner winner={winner} /> : <Winner winner="" />}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <div></div>
      )}

      <TournamentForm setPlayers={setPlayers} />
    </Container>
  );
}

export default TournamentBracket;

// // import { Button, ButtonGroup } from "@mui/material";
// import TournamentForm from "./TournamentForm";


// function TournamentBracket() {
//   return (
//     <div>
//       <p>Tournament</p>
//       {/* <ButtonGroup variant="contained">
//         <Button>remake tournament</Button>
//         <Button color="error">clear tournament</Button>
//       </ButtonGroup> */}
//         <TournamentForm/>
//     </div>
//   );
// }

// export default TournamentBracket;

