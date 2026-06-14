import { useState } from "react";

function EmployeeForm(){
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
         console.log(Object.fromEntries(formData.entries()));
    }
    const [count, setCount] = useState(0);
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Name"
                    name="name"
                    
                    />
                <input 
                    type="text" 
                    placeholder="role"
                    name="role"
                    
                    />
                <input 
                    type="text" 
                    placeholder="experience"
                    name="experience"
                />
                <button type="submit">
                        Submit
                </button>
            </form>
            <div>
                <button onClick={()=> setCount(count+1)}>Increment</button>
                <button onClick={()=> setCount(count-1)}>Decrement</button>
                <button onClick={()=> setCount(0)}>Reset</button>
                <h1>Count : {count} </h1>
            </div>
        </div>
    )
}

export default EmployeeForm;