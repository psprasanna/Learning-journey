import { useState } from "react";
function useToggle(initialValue = false){
    const [value, setValue] = useState(initialValue);

    const switchToggle = () => {
        setValue(prev => !prev);
    }

    return {
        value,
        switchToggle
    }
}

export default useToggle;