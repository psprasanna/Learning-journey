function UserProfile({name, city, company}){
    return(
        <div>
            <h1>{ name }</h1>
            <p>{city + ' : ' + company}</p>
        </div>
    )
}

export default UserProfile;