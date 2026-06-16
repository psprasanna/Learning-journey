import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <Link to='/'>Home</Link>
            {" | "}
            <Link to='/employees'>Employees</Link>
            {" | "}
            <Link to='/profile'>Profile</Link>
        </nav>
    )
}


export default Navbar;