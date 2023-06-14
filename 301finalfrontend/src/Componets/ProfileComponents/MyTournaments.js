import "./Tourn.css"; // Import the CSS file

function MyTournaments() {
    return (
        <div className="createdTournContainer">
            {/*HTML CODE GOES IN HERE :> -KD  */}
            <h2 className="p_TournTitle">Created Tournaments</h2>
            <div className="p_TournAlign">
                <div className="createdTourn_Name">
                    <ul className="myTourn_ListA">
                    <li className="p_TournData"> myData_Name </li>
                    <li className="p_TournData"> myData_Name </li>
                    <li className="p_TournData"> myData_Name </li>
                    <li className="p_TournData"> myData_Name </li>
                    <li className="p_TournData"> myData_Name </li>
                    </ul>
                    </div>
                <div className="createdTourn_Date">
                    <ul className="myTourn_ListB">
                    <li className="p_TournData"> myData_Date </li>
                    <li className="p_TournData"> myData_Date </li>
                    <li className="p_TournData"> myData_Date </li>
                    <li className="p_TournData"> myData_Date </li>
                    <li className="p_TournData"> myData_Date </li>
                    </ul>
                    </div>
            </div>

        </div>
    );
}

export default MyTournaments;
