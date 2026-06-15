import { useState } from "react";
function EmpForm({onAddEmployee}){
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const addEmployee = (e) => {
        e.preventDefault();
        const newEmployee = {
            id : Date.now(),
            name : name,
            role : role,
            active : true
        }
        setName('');
        setRole('');
        onAddEmployee(newEmployee);
    }

    return (
        <div>
            <form action="" onSubmit={addEmployee}>
                <input type="text" name="name" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
                <input type="text" name="role" placeholder="role" onChange={(e)=>setRole(e.target.value)}/>
                <input type="submit" />
            </form>
        </div>
    )
}


export default EmpForm;