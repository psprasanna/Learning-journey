function EmpCard({id, name, role, active }){
    return(
        <div>
            <p>{'Name : ' + name + ' Role : ' + role + " active : " + active}</p>
        </div>
    )
}


export default EmpCard;