import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

function Navbar(){
    const user = useContext(UserContext)
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                {" | "}
                <Link to='/employees'>Employees</Link>
                {" | "}
                <Link to='/profile'>Profile</Link>
            </nav>
            <h2>Welcome : {user.name}</h2>
        </>
    )
}


export default Navbar;