import React from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Link } from 'react-router-dom'


let userSchema =yup.object({
    email:yup.string().email().required(),
    password:yup.string().min(8)
  })
  .required()


 const UserSignin=()=>{

    const { register,handleSubmit,formState:{errors}} = useForm({resolver:yupResolver(userSchema)})

    const onSubmit = async(data) => {
      try{
        const res= await axios.post("http://localhost:3000/api/v1/user/signin",data,{withCredentials:true})

         console.log(res.data);

      }catch(error){

        console.log(error)
      }
    }
    

  return (
    <div className='flex h-screen justify-center items-center'> 
     <form onSubmit={handleSubmit(onSubmit)}
     className='flex flex-col p-6 shadow-md rounded-md border gap-y-2'>

    <input {...register("email")}
     placeholder='email'
     className='block w-full rounded-lg border border-gray-300
     bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'/>
    {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}


    <input {...register("password")} 
    placeholder='password'
    type='password'
    className='block w-full rounded-lg border border-gray-300
    bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'/>
    {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}


    <input type="submit"className='rounded-md text-white bg-blue-500 hover:bg-blue-300 py-1' />

    <p>
      User not created yet{" "}
      <Link to='/user/signup' className='text-blue-500 underline'>
      SignUp 
      </Link>
    </p>
  </form>
</div>
  )
}

export default UserSignin