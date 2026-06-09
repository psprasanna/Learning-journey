// Promise
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

const testPromise = new Promise((resolve, reject) => {
    const result = 5+5;
    if(result === 10){
        resolve('fulfilled')
    } else {
        reject('Rejected');
    }
});

// Consuming a promise
// testPromise.then(message => {
//     // if resolved
//     console.log(message);
// }).catch(message=> {
//     // if rejected
//     console.log(message);
// })

const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=40.71288&longitude=-74.0060&current_weather=true'

let isLoading = true;

/*
fetch(apiUrl)
    .then(response => {
        if(!response.ok){
            throw new Error('error : ' + response.status)
        }
        console.log(response);
        return response.json() // Json itself returning promise so the next then is activate and we can use that.
    })
    .then(data =>{
        console.log("Temperature : ", data.current_weather.temperature);
    })
    .catch(error => {
        console.log("error in catch : ",error);
    })
    .finally(()=> {
        //runs once the promise is settled
        isLoading = false;
    })
*/
    // New Promise 
    const loginPromise = new Promise((resolve, reject) =>{
        isLogin = true;

        if(isLogin){
            resolve("Logged in");
        } else {
            reject("Not Logged in");
        }
    })

    loginPromise.then(response =>{
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })