import { Link } from "react-router-dom";

const AdminNavbar=()=>{
 
    const navLinks=[
        {
            path:"/admin/instructors",
            value:"Instructor",
        },
        {
            path:"/admin/courses",
            value:"Courses",
        }
    ]

    return(
        <div className="flex items-center justify-between p-4 shadow-lg">
            <Link to="/admin/dashboard">
                <h1 className="text-2xl text-blue-600">LOGO</h1>
            </Link>
            <ul>
                {navLinks.map((link,index)=>(
                    <Link key={index} to={link.path}>
                        <li className="text-lg font-semibold text-gray-800">
                            {link.value}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default AdminNavbar