import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenWithPopup } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);


  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-4qy3uxvn.us.auth0.com";
  
      try {
        const accessToken = await getAccessTokenWithPopup({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user update:current_user_metadata buy:products",
        },{
          popup: window.open("http://localhost:5173")
        });
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user?.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e:any) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenWithPopup, user?.sub]);

  return (
     
      <div>
        <img src={user?.picture} alt={user?.name} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
      </div>

  );
};

export default Profile;