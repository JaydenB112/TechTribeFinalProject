import CompetitorPosition from "./CompetitorPosition";

function Match({players, round, position, advancePlayer, retreatPlayer}) {
  let pos1 = position * 2;
  let pos2 = position * 2 + 1;

  let player1 = players.find((player) => player.position === pos1 && player.round === round)?.name || '';
  let player2 = players.find((player) => player.position === pos2 && player.round === round)?.name || '';
  
  console.log(player1,position,round);

  return (

    <div className='mb-4'>
    <CompetitorPosition round={round} player={player1} advancePlayer={advancePlayer} retreatPlayer={retreatPlayer}/>
    <CompetitorPosition round={round} player={player2} advancePlayer={advancePlayer} retreatPlayer={retreatPlayer}/>
  </div>
  );
}

export default Match;

// import CompetitorPosition from "./CompetitorPosition";
// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   List,
//   ListItem,
// } from "@mui/material";

// function Match(tournamentList) {
//   return (
//     <>
//       <Card sx={{ display: "inline-block", mx: "2px" }} variant="outlined">
//         <CardContent>
//           <List>
//             <ListItem>
//               <CompetitorPosition tournamentList={tournamentList} />
//             </ListItem>
//             <ListItem>
//               <CompetitorPosition tournamentList={tournamentList} />
//             </ListItem>
//           </List>
//         </CardContent>
//         <Button variant="contained">end match</Button>
//         <CardActions></CardActions>
//       </Card>
//     </>
//   );
// }

// export default Match;


