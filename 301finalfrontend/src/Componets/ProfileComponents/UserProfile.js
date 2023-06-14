import "./User.css"; // Import the CSS file
import { useAuth0 } from "@auth0/auth0-react";



const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
      <img className="userPFP" src={user.picture} alt={user.name} />
      <h2 className="auth0_Username">
      <h2>{user.name}</h2>
      </h2>
    </div>
  )
  );
};

export default UserProfile;
