import CompetitorPosition from "./CompetitorPosition";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
} from "@mui/material";

function Match(tournamentList) {
  return (
    <>
      <Card sx={{ display: "inline-block", mx: "2px" }} variant="outlined">
        <CardContent>
          <List>
            <ListItem>
              <CompetitorPosition tournamentList={tournamentList} />
            </ListItem>
            <ListItem>
              <CompetitorPosition tournamentList={tournamentList} />
            </ListItem>
          </List>
        </CardContent>
        <Button variant="contained">end match</Button>
        <CardActions></CardActions>
      </Card>
    </>
  );
}

export default Match;
