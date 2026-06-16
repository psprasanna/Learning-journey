function EmpCard({id, name, role, active, toggleStatus }){
    return(
        <div>
            <p>{'Name : ' + name + ' Role : ' + role + " active : " + active}</p>
            <button onClick={()=> toggleStatus(id)}>Toggle Status</button>
        </div>
    )
}


export default EmpCard;