import { use, useContext } from "react";
import UserContext from "../context/UserContext";

function SideBar(){
    const user = useContext(UserContext)
    return (
        <div>
            <p>Logged in as : {user.name}</p>
        </div>
    );
}

export default SideBar;