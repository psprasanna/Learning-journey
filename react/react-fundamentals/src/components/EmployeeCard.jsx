function EmployeeCard({name, role, experience,  active}){
    return (
        <div style={ {display : active ? 'block' : 'none'} }>
            <h2>{name}</h2>
            <p>{'working as a '+role + ' around ' +experience + ' years'}</p>
            {active ? <p>Employee Active</p> : <p>Employee Inactive</p>}
        </div>
    )
}

export default EmployeeCard;