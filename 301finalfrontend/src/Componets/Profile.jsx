import React, { useEffect, useState } from "react";
import UserProfile from "./ProfileComponents/UserProfile";
import MyTournaments from "./ProfileComponents/MyTournaments";
import PastTournaments from "./ProfileComponents/PastTournaments";
import "./Profile.css"; // Import the CSS file

function Profile() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the server
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/data`);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const sendData = async (postData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      if (response.ok) {
        // Data sent successfully
        console.log("Data sent to the server successfully!");
      } else {
        console.error("Error sending data:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending data:", error.message);
    }
  };

  return (
    <div className="profile-container">
      <div className="white-box">
        {/* Component for UserProfile */}
        <UserProfile data={data} sendData={sendData} />
      </div>
      <div className="white-box">
        {/* Component for My Tournament */}
        <MyTournaments data={data} />
        {/* Component for Past Tournament */}
        <PastTournaments data={data} />
      </div>
    </div>
  );
}

export default Profile;

