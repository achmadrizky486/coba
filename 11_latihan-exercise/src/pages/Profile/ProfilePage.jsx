import React from 'react'
import { mockUsers } from '../../mockData'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'

const ProfilePage = ({ users }) => {
  return (
    <>
      <Header text="Profile Page" />
      {users.map((user) => <ProfileCard user={user} />)}
    </>
  )
}

export default ProfilePage