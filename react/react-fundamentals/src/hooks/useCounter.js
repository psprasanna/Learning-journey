import { useState } from "react";

function useCounter(initialValue){
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(prev => prev + 1);
    }
    const decrement = () => {
        setCount(prev =>prev - 1);
    }
    const reset = () => {
        setCount(0);
    }

    return {
        count,
        increment,
        decrement,
        reset
    }
}

export default useCounter;