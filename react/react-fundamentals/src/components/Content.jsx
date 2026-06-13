const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

function Content(){
    return(
        <div>
            { technologies.map(tech =>{
                return <li key={tech}>{tech}</li>
                })
            }
        </div>
    );
}


export default Content;