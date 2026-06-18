import {useContext} from 'react'
import UserContext from "../context/UserContext"

function Profile() {
    const user = useContext(UserContext)
    return (
        <div>
            <h1>Profile Page</h1>
            <h2>{user.name}</h2>
            <p>{user.role}</p>
        </div>
    );
}

export default Profile;