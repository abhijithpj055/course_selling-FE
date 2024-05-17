import React from 'react'
import UserSignin from '../../components/user/UserSignin'

function UserSigninPage() {
  return (
    <div className='flex flex-col gap-y-5 justify-center m-10 items-center h-screen'>
      <h1 className='text-2xl text-blue-700 shadow-lg px-4 py-1 rounded-lg hover:scale-110 cursor-pointer ease-in duration-300  transition-all'>
        USER SIGN IN</h1>
      <UserSignin/>
    </div>
  )
}

export default UserSigninPage