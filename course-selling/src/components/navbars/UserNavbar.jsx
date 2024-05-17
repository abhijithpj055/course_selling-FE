import { Link } from "react-router-dom";

const UserNavbar=()=>{
 
    const navLinks=[
        {
            path:"/contact-us",
            value:"Contact Us",
        },
        {
            path:"/about-us",
            value:"About Us",
        }
    ]

    return(
        <div className="flex items-center justify-between p-4 shadow-lg">
                <h1 className="text-2xl text-blue-600">LOGO</h1>
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

export default UserNavbar