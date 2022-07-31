import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Profile = () => {

    const {user} = useAuth0();

  return (
    <div>{user?.email}</div>
  )
}

export default Profile