//primitive

//7 types : String, Number, Boolean, null, undefined, Symbols, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const oustsideTemp = null
let userEmail; //or let userEmail = undefined; both are same

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)

const bigNumber = 3456343576654356754n


//Rference (Non primitive)

// Array, Object, Functions

const heros = ["Dhruv", "Nagraj", "Doga"]
let myObj = {
    name: "Ahmad",
    age: 28,
}

const myFunction = function(){
    console.log("Hello World")
}


console.log(typeof score)
console.log(typeof scoreValue)
console.log(typeof isLoggedIn)
console.log(typeof oustsideTemp)
console.log(typeof userEmail)
console.log(typeof id)
console.log(typeof anotherId)
console.log(typeof bigNumber)
console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction)


