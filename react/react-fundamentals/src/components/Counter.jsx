import useCounter from "../hooks/useCounter"
function Counter(){
    const initialValue = 4;
    const {
        count,
        increment,
        decrement,
        reset
    } = useCounter(initialValue);

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter;