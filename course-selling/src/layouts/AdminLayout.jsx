import { Outlet } from "react-router-dom"
import AdminNavbar from '../components/navbars/AdminNavbar'


const AdminLayout=()=>{
    return(
        <>
        <nav>
        <AdminNavbar/>
        </nav>
        <Outlet/>
        </>
    )
}

export default  AdminLayout