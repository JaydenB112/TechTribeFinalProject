import Match from "./Match";
const Rounds = ({ numOfMatches, players, round, advancePlayer, retreatPlayer }) => {
  let matches = [];
  for (let i = 0; i < numOfMatches; i++) {
    matches.push(
      <Match
        players={players}
        round={round}
        position={i}
        advancePlayer={advancePlayer}
        retreatPlayer={retreatPlayer}
      />
    );
  }
  return (
    <div>
      {matches.map((match) => {
        return match;
      })}
    </div>
  );
};


export default Rounds;

