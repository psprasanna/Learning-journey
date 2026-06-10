async function getUser(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json()
        // console.log(users[1]);
        var custom_data = {};
        users.forEach(user=>{
            custom_data = {
                name:user.name,
                email:user.email
            }
            // console.log(`name : ${user.name} email : ${user.email}`);
        })
        // console.log(custom_data);
        
        //Map
        const userName = users.map(user=>user.name)
        // console.log(userName)

        //Filter
        const filterCity = users.filter(user => user.address.city === 'South Elvis')
        // console.log(filterCity);
        
        //Find
        const findSecond = users.find(user => user.id === 2)
        // console.log(findSecond)
        
        //contains
        const contains_group = users.filter(user=>user.company.name.toLowerCase().includes('group'))
        // console.log(contains_group);

        //chaining method 
        const filter_map = users.filter(user=>user.company.name.toLowerCase().includes("group"))
                                .map(user=>({
                                    id:user.id, 
                                    name:user.name, 
                                    city:user.address.city
                                }));
                                console.log(filter_map);
        
        console.log('Loaded....')
    } catch (error){
        console.log(error);
    }
}

console.log('Loading...');
getUser();