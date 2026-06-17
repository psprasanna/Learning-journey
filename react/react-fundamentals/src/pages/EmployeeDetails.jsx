import {useNavigate, useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';

function EmployeeDetails(){
    const {id} = useParams();
    const navigate = useNavigate();

    //Also we can use like this 
    //const params = useParams()
    //then params.id returns the id
    
    return(
        <div>
            <h1>Employee : {id}</h1>

            <Link to="/employees/1">Employee 1</Link>
            <br/>
            <Link to="/employees/2">Employee 2</Link>
            <br />

            <button onClick={()=>(navigate('/profile'))}>Go To Profile</button>

        </div>


    )
}


export default EmployeeDetails;