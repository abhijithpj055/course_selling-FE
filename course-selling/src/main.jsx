import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react';
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from '../src/App'
import UserSignupPage from './pages/user/UserSignupPage';
import UserSigninPage from './pages/user/UserSigninPage';
import SignupPage from './pages/instructor/SignupPage';
import SigninPage from './pages/instructor/SigninPage';
import HomeLayout from './layouts/HomeLayout';
import AdminLayout from './layouts/AdminLayout';
import CourseCard from './components/instructor/CourseCard';
import AdminDashboardPage from './components/instructor/AdminDashboardPage';
import CourseAdd from './components/instructor/CourseAdd';
import InstructorList from './components/instructor/InstructorList';
// import UserRoutes from './components/protected-Routes/UserRoutes';
import UserLayout from './layouts/UserLayout';
import UserdashboardPage from './components/user/UserdashboardPage';
import CoursesPage from './pages/user/CoursesPage';
import EasyMethod from './components/protected-Routes/EasyMethod';
import UserRoutes from './components/protected-Routes/UserRoutes';


const router =createBrowserRouter([
  {
    element:<HomeLayout/>,
    children:[
      {
        path:'/',
        element:<App/>
      },
      {
        path:'/instructor/signup',
        element:<SignupPage/>
      },
      {
        path:'/instructor/signin',
        element:<SigninPage/>
      },
      {
        path:'/user/signup',
        element:<UserSignupPage/>
      },
      {
        path:'/user/signin',
        element:<UserSigninPage/>
      },
    ]
  },
  {
    element:(
      <EasyMethod>
    <AdminLayout/>
    </EasyMethod>
    ),
    children:[
      {
        path:"/admin/dashboard",
        element:<AdminDashboardPage/>
      },
      {
        path:'/admin/courses',
        element:<CourseCard/>
      },
      {
        path:'/admin/courses/add-course',
        element:<CourseAdd/>
      },
      {
        path:'/admin/instructors',
        element:<InstructorList/>
      }
    ]

  },
  {
    element:(
      <UserRoutes>
        <UserLayout/>
        </UserRoutes>
    
    ),
    children:[
      {
        path:'/user/dashboard',
        element:<UserdashboardPage/>
      },
      {
        path:'/user/courses',
        element:<CoursesPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
