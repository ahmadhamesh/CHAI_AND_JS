// var c = 300
let a = 300

//this is a global scope

if(true){
    // this is a block scope
    let a = 10
    const b = 20
    // console.log("INNER:", a)
    // var c = 30 //this will not work for block scope    
}

// console.log(a)

// console.log(a) //showing error because a is not define because of block scope
// console.log(b) //showing error because b is not define because of block scope
// console.log(c) //30 because its not working in block scope

//{} this is a scope this is not a object its working when a function or any if else condition works

//closure if nested function are there then child function can access the parent variable 
function one(){
    const username = "Hamesh"
    function two(){
        const website = "Youtube"
        // console.log(username)
    }
    // console.log(website)
    two()
}
one()


if(true){
    const username = "hamesh"
    if(username === "hamesh"){
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website);// error you cant access
    
}
// console.log(username); //error

//+++++++++++++++++++Interesting+++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}

addtwo(5)
//function expression
const addtwo = function(num){
    return num + 2
}


