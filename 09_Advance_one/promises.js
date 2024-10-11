//promises
//somthing that happens in future
//A Promise is an object
//first method
const promiseOne = new Promise(function(resolve, reject){
    //Do and async task
    //DB calls, cryptography, network calling 
    setTimeout(function(){
        console.log('Async task is completed'); 
        resolve()
    },1000)
})
//resolve is directly connected to then
promiseOne.then(function(){ 
    console.log('Promise consumed');
    
})


//second method
new Promise(function (reslove, reject) {
    setTimeout(function(){
        console.log('Async Task 2');
        reslove()
    },1000)
}).then(function () {
    console.log('Async 2 resolved');
    
})


//third method
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function () {
        resolve({username:'Ahmad', email:'ahmad@exmaple.com'})        
    },1000)
})
 
promiseThree.then(function (user) {
   console.log(user);
    
})

// fourth promise
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'Hamesh', password: '12345'})
        }else{
            reject('ERROR Something went wrong')
        }
    },1000)
})
// callback hell how to avoid callback hell //25min video 
 promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>console.log('The promise is either resolved or rejetcted')) //finally is a default condition


// promiseFive using async await //wait for some time to complete the work if its done it continues otherwise it gives an error
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username:'javascript', password:4321})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);        
    } catch (error) {
        console.log(error);
    }    
}
consumePromiseFive()



//fetch
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
    
// }
// getAllUsers()

//
fetch('https://api.github.com/users/ahmadhamesh')
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error) => console.log(error))

 