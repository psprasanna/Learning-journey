// Jsx should return a single parent element.
// Use js inside {}

const name = "username";
function example(){
    return (
        <div>
            <h1>Hello {name}</h1>
            <p>P tag</p>
        </div>
    );
}

// Instead of like this
// function wrong_example_jsx(){
//     return(
//         <h1>H1</h1>
//         <P>P tag</P>
//     );
// }

export default example();