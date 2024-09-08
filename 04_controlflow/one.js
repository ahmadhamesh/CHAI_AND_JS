//if, if else, opertors
const isUserLoggedIn = true

// if(isUserLoggedIn){
// }
// 2<=2
// 3 != 2

// <, >, >=, ==, !=, ===

// if(2 == "2"){
//     console.log("executed")
// }


// const temprature = 41

// if(temprature === 50){
//     console.log("less than 50")
// }else{
//     console.log("temprature is greater than or equal to  50");
    
// }


// const score = 200
// if(score > 100){
//     // var power = "fly" // if you write var this veravlbe should not be access outside the block 
//     let power = "fly"
//     console.log(`User Power: ${power}`)

// }
// console.log(`User Power: ${power}`) //let can not access outside the block it  give error


const balence = 1000

// if(balence > 500) console.log("test"), console.log("test2"); //this will work but not good code we should not write this

// if(balence < 500){
//     console.log("less than 500");
// } else if(balence < 750){
//     console.log("less than 750");
// }else if(balence < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200"); 
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User is logged in");
    
}