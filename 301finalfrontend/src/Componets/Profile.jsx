import MyTournaments from "./ProfileComponents/MyTournaments";
import PastTournaments from "./ProfileComponents/PastTournaments";
import UpComingTournaments from "./ProfileComponents/UpcomingTournaments";
import UserProfile from "./ProfileComponents/UserProfile";
// The components listed above this comment contain the elements for the profile! :> -KD

function Profile() {
  return (
    <div>
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
