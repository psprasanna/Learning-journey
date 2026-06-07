// Async 

/*

Promise-based syntax:

mypromise 
    .then( () => { }) // Handle success
    .catch( () => { }) // catch the error
    .finally( () => { }) //Run once completed

//Equivalent async/await syntax:

async function myFunction(){
    try{
    // const res = await myPromise;
    } catch (error) {
     //Handle error
    } finally {
     //Run once completed
    }
}
*/

const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=40.71288&longitude=-74.0060&current_weather=true'

let isLoading = true;

//Basic async example
// async function myFunction() {
//     console.log('A');
//     const response = await(fetch(apiUrl));
//     console.log(response, 'B');
// }

// Async function with proper error handling
async function myFunction() {
    console.log('B')
    try{
        // For getting response in the async() we have to await
        const response = await(fetch(apiUrl));
        if(!response.ok){
            throw new Error('Error : ' + response.status);
        }
        const data = await(response.json());
        console.log(data.current_weather.temperature)
    }
    catch(error){
        console.log(error);
    }
    finally{
        //Runs once completed
        console.log('D')
        isLoading = false;
    }
}

console.log('A');
myFunction();
console.log('c');