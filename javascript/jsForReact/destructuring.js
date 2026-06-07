// UnPack values from arrays or properties from object into distinct variables.

// For Object
const user = {
    firstname : 'karthi',
    lastname : 'P', 
    age : 26, 
    profession : 'developer'
}

const { firstname, lastname } = user;
console.log(firstname);


// for List 
user_detail = ['karthi', 26, 'developer'];
const [name, age, profession] = user_detail;
console.log(profession)