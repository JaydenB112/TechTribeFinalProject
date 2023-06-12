function PastTournaments() {
    return (
        <>
            {/*HTML CODE GOES IN HERE :> -KD  */}
            <h2 className="p_TournTitle">My Tournaments</h2>
            <div className="p_TournAlign">
                <div className="pastTourn_Name">
                    <li className="p_TournData"> {pastData_Name} </li>
                    <li className="p_TournData"> {pastData_Name} </li>
                    <li className="p_TournData"> {pastData_Name} </li>
                    <li className="p_TournData"> {pastData_Name} </li>
                    <li className="p_TournData"> {pastData_Name} </li>
                </div>
                <div className="pastTourn_Date">
                    <li className="p_TournData"> {pastData_Date} </li>
                    <li className="p_TournData"> {pastData_Date} </li>
                    <li className="p_TournData"> {pastData_Date} </li>
                    <li className="p_TournData"> {pastData_Date} </li>
                    <li className="p_TournData"> {pastData_Date} </li>

                </div>
            </div>

        </>
    );
}

export default PastTournaments;