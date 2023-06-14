import "./User.css"; // Import the CSS file


function UserProfile() {
  return (
    <div>
      {/* HTML CODE GOES IN HERE :> -KD */}
      <img className="userPFP" src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg" alt="" />
      <h2 className="auth0_Username">
        @Username
      </h2>
    </div>
  );
}

export default UserProfile;
