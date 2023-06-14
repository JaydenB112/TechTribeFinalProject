import UserProfile from "./ProfileComponents/UserProfile";
import MyTournaments from "./ProfileComponents/MyTournaments";
import PastTournaments from "./ProfileComponents/PastTournaments";
import "./Profile.css"; // Import the CSS file


function Profile() {
  return (
    <div className="profile-container">
      <div className="white-box">
        {/* Component for UserProfile */}
        <UserProfile></UserProfile>
      </div>
      <div className="white-box">
        {/* Component for My Tournament */}
        <MyTournaments></MyTournaments>
        {/* Component for Past Tournament */}
        <PastTournaments></PastTournaments>
      </div>
    </div>
  );
}


export default Profile;
