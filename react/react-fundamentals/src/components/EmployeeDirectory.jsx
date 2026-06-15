import { useEffect, useState } from "react";
import EmpCard from "./EmpCard";
import EmpForm from "./EmpForm";

function EmployeeDirectory(){
    const [showActiveOnly, setShowActiveOnly] = useState(false);
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "Prasanna",
            role: "Full Stack Developer",
            active: true
        },
        {
            id: 2,
            name: "Arun",
            role: "Backend Developer",
            active: false
        }
    ]);

    const filteredEmployees = showActiveOnly ?
                            employees.filter(emp => (emp.active)) :
                            employees;

    const addEmployee = (newEmployee) =>{
        setEmployees(prev => [...prev, newEmployee] )
    }

    // useEffect(()=>{
    //     try{
    //         async function filterEmployees(filterState) {
    //             return employees.filter(emp => emp.active === filterState)
    //                     .map(emp => (
    //                         <EmpCard 
    //                             key={emp.id}
    //                             name={emp.name}
    //                             role={emp.role}
    //                             active={emp.active}
    //                         />
    //                     ))
    //         }
    //     } catch(error){
    //         console.log('error')
    //     }
    //     filterEmployees(filterState);
    // },[employees])

    return (
        <>
            <EmpForm onAddEmployee={addEmployee}/>
            <button onClick={()=>setShowActiveOnly(prev => !prev)}>
                {showActiveOnly ? 'Show All' : 'Show Active'}
            </button>
            {
                filteredEmployees.map(emp => (
                    <EmpCard 
                        key={emp.id}
                        id={emp.id}
                        name={emp.name}
                        role={emp.role}
                        active={emp.active}
                    />
                ))
            }
        </>
    )
}

export default EmployeeDirectory;