import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IUserMetadata } from "../interfaces/IUserMetadata";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenWithPopup, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState<IUserMetadata | null>(null);


  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-4qy3uxvn.us.auth0.com";
      console.log( await getAccessTokenSilently());
      try {
        const accessToken = await getAccessTokenWithPopup({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user update:current_user_metadata buy:products",
        }, {
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
      } catch (e: any) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenWithPopup, user?.sub]);

  return (
    <div className="bg-white flex items-center justify-center w-full p-2">
      <div className="bg-zinc-50 my-32 md:my-48 lg:my-64 flex justify-start items-start flex-row p-4 md:p-12 rounded-md border-2 border-t-zinc-200 shadow-lg ">
        <div className="my-4" >
          <img className="rounded-md w-16 h-16 lg:w-28 lg:h-28" src={user?.picture} alt={user?.name} />
        </div>
        <div className="flex flex-col items-start justify-center mt-4 ml-16">
        <p className="text-sm md:text-lg">
          <span className="font-bold mr-8">Email:</span> {user?.email}
        </p>
        <p className="text-sm md:text-lg">
          <span className="font-bold mr-2">Berea favorita:</span> {userMetadata?.favorite_beer}
        </p>
        <p className="text-sm md:text-lg">
          <span className="font-bold mr-2 lg:mr-6">Adresa:</span> {userMetadata?.addresses.home_address}
        </p>
        <p className="text-sm md:text-lg">
          <span className="font-bold mr-2 lg:mr-6">Telefon:</span> {userMetadata?.phone}
        </p>
        
        </div>
      </div>
      {/* {JSON.stringify(userMetadata)} */}
      
    </div>
  
  );
};

export default Profile;