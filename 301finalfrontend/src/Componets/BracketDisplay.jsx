function BrackDisplay({ submittedData }) {
    if (!submittedData) {
      return null;
    }
  
    const { tournamentName, competitorsList, replacementList } = submittedData;
  
    return (
      <>
        <h1>{tournamentName}</h1>
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