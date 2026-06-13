const technologies = [
    {
        id: 1,
        name: "React"
    },
    {
        id: 2,
        name: "Flask"
    },
    {
        id: 3,
        name: "MySQL"
    }
];

function TechnologyCard(){
    return (
        <div>
            {
                technologies.map(tech => (
                    <li key={tech.id}>{tech.name}</li>
                ))
            }
        </div>
    )
}

export default TechnologyCard;