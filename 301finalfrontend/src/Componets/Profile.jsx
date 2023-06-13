import UserProfile from "./ProfileComponents/UserProfile";
import MyTournaments from "./ProfileComponents/MyTournaments";
import UpComingTournaments from "./ProfileComponents/UpcomingTournaments";
import PastTournaments from "./ProfileComponents/PastTournaments";
import "./Profile.css"; // Import the CSS file

function Profile() {
  return (
    <div className="profile-container">
      <p>profile</p>
      {/* Import all the cool KD components here :) */}
      {/* Component for UserProfile */}
      <UserProfile></UserProfile>
      {/* Component for My Tournament */}
      <MyTournaments></MyTournaments>
      {/* Component for Upcoming Tournament */}
      <UpComingTournaments></UpComingTournaments>
      {/* Component for Past Tournament */}
      <PastTournaments></PastTournaments>
    </div>
  );
}

export default Profile;
