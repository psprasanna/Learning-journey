import { useState } from "react";

function FormsExample(){
    const [name, setName] = useState('');
    const [city, setCity] = useState('')

    return (
        <div>
            <input 
                type="text"
                value={name}
                onChange={(e) => 
                    setName(e.target.value)
                } 
            />
            <input 
                type="text" 
                value={city}
                onChange={(e)=>
                    setCity(e.target.value)
                }
            />
            <h2>Welcome {name ? name : "" } {name && city ? " from " + city : ''}</h2>
        </div>
    )
}

export default FormsExample;