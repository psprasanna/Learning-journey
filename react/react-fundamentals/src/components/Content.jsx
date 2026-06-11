const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

function content(){
    return(
        technologies.map(tech => (
            <Content>{tech}</Content>
        ))
    );
}


export default content