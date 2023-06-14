function PastTournaments() {
    return (
        <div className="pastTournContainer">
            {/*HTML CODE GOES IN HERE :> -KD  */}
            <h2 className="p_TournTitle">Past Tournaments</h2>
            <div className="p_TournAlign">
                <div className="pastTourn_Name">
                    <ul className="pastTourn_ListA">
                    <li className="p_TournData"> pastData_Name </li>
                    <li className="p_TournData"> pastData_Name </li>
                    <li className="p_TournData"> pastData_Name </li>
                    <li className="p_TournData"> pastData_Name </li>
                    <li className="p_TournData"> pastData_Name </li>

                    </ul>
                    </div>
                <div className="pastTourn_Date">
                   <ul className="pastTourn_ListB">
                   <li className="p_TournData"> pastData_Date </li>
                    <li className="p_TournData"> pastData_Date </li>
                    <li className="p_TournData"> pastData_Date </li>
                    <li className="p_TournData"> pastData_Date </li>
                    <li className="p_TournData"> pastData_Date </li>
                   </ul>
                   </div>
            </div>

        </div>
    );
}

export default PastTournaments;