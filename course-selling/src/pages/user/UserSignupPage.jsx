import React from 'react'
import UserSignup from '../../components/user/UserSignup'

function UserSignupPage() {
  return (
    <div className='flex flex-col gap-y-5 justify-center m-10 items-center h-screen'>
            <h1 className='text-2xl text-blue-700 shadow-lg px-4 py-1 
      rounded-lg hover:scale-110 cursor-pointer ease-in duration-300  transition-all'>
        USER SIGN UP</h1>
      <UserSignup/>
    </div>
  )
}

export default UserSignupPage