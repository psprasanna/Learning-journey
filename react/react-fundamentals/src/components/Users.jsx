import { useState, useEffect } from "react";

function Users(){
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getUsers() {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                setUsers(data);
                setIsLoading(false);
            } catch {
                setIsLoading(false);
                setError(true);
                console.log('error')
            }
        }
        getUsers();
    }, []);
    
    return (
        <div>
            {
                isLoading ? (<p>Loading....</p>) :
                error ? (<p>Something went wrong</p>):
                users.filter(user => (user.company.name.toLowerCase().includes('group')))
                    .map((user) => (
                    // <p key={user.id}>User Name : {user.name} Email : {user.email}</p>
                    <p key={user.id}>Company : {user.company.name}, City : {user.address.city}</p>
                ))
            }
        </div>
    )
}

export default Users;