import useToggle from "../hooks/useToggle";

function Toggle(){
    const {
        value, 
        switchToggle
    } = useToggle();

    return (
        <div>
            <button onClick={switchToggle}>
                {value ? "ON" : "OFF"}
            </button>
        </div>
    );
}

export default Toggle;