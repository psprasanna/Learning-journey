// The spread operator can copy all entries of an array or object.
//  ...

const arr1 = ['a', 'b', 'c']
// instead of pushing d into arr1 to create new array based on arr1
const arr2 = [...arr1, 'd']
console.log(arr1)
console.log(arr2)

// For object 
const ob1 = {name: 'karthi', age : 25}
const ob2 = {...ob1, profession: 'developer'}
console.log(ob1)
console.log(ob2)