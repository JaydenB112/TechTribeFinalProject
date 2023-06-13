import Rounds from "./Brack/Rounds";

function BrackDisplay({ submittedData }) {
    if (!submittedData) {
      return null;
    }
  
    const { tournamentName, competitorsList, replacementList } = submittedData;
    const tournamentList = competitorsList.map((name) => ({round:1, name, score: 0 }));
    console.log(tournamentList);
    console.log(competitorsList);
    return (
      <>
        <h1>{tournamentName}</h1>
        <Rounds tournamentList={tournamentList}/>
        <h3>Tournament Roster</h3>
        <ol>
          {competitorsList.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ol>
        <h3>Roster Competitor Replacement</h3>
        <ol>
          {replacementList.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ol>
      </>
    );
  }
  
export default BrackDisplay;