import { act, useState } from "react"

function EmployeeStatus(){
    const[active, setActive] = useState(true);
    return (
        <div>
            <p>Employee : {active ? 'Active' : 'In Active'}</p>
            <button 
                type="toggle" 
                onClick={()=>setActive(!active)}
            >
                Toggle Status
            </button>
        </div>
    )
}


export default  EmployeeStatus;