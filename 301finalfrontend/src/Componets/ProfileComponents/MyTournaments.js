import "./Tourn.css"; // Import the CSS file

function MyTournaments() {
    return (
        <div className="createdTournContainer">
            {/*HTML CODE GOES IN HERE :> -KD  */}
            <h2 className="p_TournTitle">My Tournaments</h2>
            <div className="p_TournAlign">
                <div className="createdTourn_Name">
                    <li className="p_TournData"> myData_Name </li>
                    <li className="p_TournData"> myData_Name </li>
                    <li className="p_TournData"> myData_Name </li>
                    <li className="p_TournData"> myData_Name </li>
                    <li className="p_TournData"> myData_Name </li>
                </div>
                <div className="createdTourn_Date">
                    <li className="p_TournData"> myData_Date </li>
                    <li className="p_TournData"> myData_Date </li>
                    <li className="p_TournData"> myData_Date </li>
                    <li className="p_TournData"> myData_Date </li>
                    <li className="p_TournData"> myData_Date </li>
                </div>
            </div>

        </div>
    );
}

export default MyTournaments;
