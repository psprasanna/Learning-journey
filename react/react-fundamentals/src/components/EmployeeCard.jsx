function EmployeeCard({name, role, experience,  active}){
    return (
        <div style={ {display : active ? 'block' : 'none'} }>
            <h2>{name}</h2>
            <h1>{role}</h1>
            <p>{experience}</p>
        </div>
    )
}

export default EmployeeCard;