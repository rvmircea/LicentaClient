import axios from "axios";
import { Retryer } from "react-query/types/core/retryer";


export const authApi = axios.create({
    baseURL: "https://dev-4qy3uxvn.us.auth0.com/api/v2/",
});

export const getAuth = async (token:string, userId:string | undefined) => {
    
    
    const response = await axios.get(`https://dev-4qy3uxvn.us.auth0/api/v2/users/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}

export const postAuth = async () => {
    const response = await axios.post('https://dev-4qy3uxvn.us.auth0.com/oauth/token', 
    {
        client_id:"noeQ4QqHhOc9jOd7TUrPOAoN27tz5JXU",
        client_secret:"gxhxgETGEtOU4Hzo_Fr3q2rIZvgymNzrdVlPS4XnJbLD0MivD-y070t6usENHeSX",
        audience:"https://dev-4qy3uxvn.us.auth0.com/api/v2/",
        grant_type:"client_credentials",
        scope:"read:current_user update:current_user_metadata buy:products"
    },
    {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
    }
    )
    console.log(response.data);
    
    return response.data;
}