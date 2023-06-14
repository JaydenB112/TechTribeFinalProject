// import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import Winner from "./Winner";
import TournamentForm from "./TournamentForm";
import Rounds from "./Brack/Rounds";
import { Container, Col, Row } from "react-bootstrap";

function TournamentBracket() {
  const [winner, setWinner] = useState("");
  const [players, setPlayers] = useState([]);
  // const [players, setPlayers] = useState([
  //   { name: "Player 1", round: 0, position: 0 },
  //   { name: "Player 2", round: 0, position: 1 },
  //   { name: "Player 3", round: 0, position: 2 },
  //   { name: "Player 4", round: 0, position: 3 },
  //   { name: "Player 5", round: 0, position: 4 },
  //   { name: "Player 6", round: 0, position: 5 },
  //   { name: "Player 7", round: 0, position: 6 },
  //   { name: "Player 8", round: 0, position: 7 },
  //   { name: "Player 9", round: 0, position: 8 },
  //   { name: "Player 10", round: 0, position: 9 },
  //   { name: "Player 11", round: 0, position: 10 },
  //   { name: "Player 12", round: 0, position: 11 },
  //   { name: "Player 13", round: 0, position: 12 },
  //   { name: "Player 14", round: 0, position: 13 },
  //   { name: "Player 15", round: 0, position: 14 },
  //   { name: "Player 16", round: 0, position: 15 },
  // ]);
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
    <div>
      <p>Tournament</p>
      {/* <ButtonGroup variant="contained">
        <Button>remake tournament</Button>
        <Button color="error">clear tournament</Button>
      </ButtonGroup> */}
      {players.length > 0 ? (
        <Container>
          <Row>
            <Col>
              <h1 className='mb-4'>Tournament</h1>
            </Col>
          </Row>
          <Row>
            {rounds.map((round) => {
              return <Col>{round}</Col>;
            })}
            <Col>
              {winner ? <Winner winner={winner} /> : <Winner winner='' />}
            </Col>
          </Row>
        </Container>
      ) : (
        <div></div>
      )}
      
      <TournamentForm setPlayers={setPlayers} />
    </div>
  );
}

export default TournamentBracket;