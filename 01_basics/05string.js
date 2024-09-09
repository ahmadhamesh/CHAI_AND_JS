// topics
//backticks or string interpolation, charAt,indexOf ,toUpperCase,charAt,indexOf,substring, slice ,trim, replace, includes, split

const name = "Ahmad"
const repoCount = 50

console.log(name + repoCount + " Value");

//backticks or string interpolation
//this is new version to write value
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

//new method to add string which is object and key and value on console 
//here you get length property and many method on console
const gameName = new String('ahmad-hms')

//console.log(gameName[0]);
//console.log(gameName.__proto__) //we dont use this now we use proto functions


//new method
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('d'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8,5) //negative value can give reverse value
console.log(anotherString);

const newStringOne = "   ahmad   "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://ahmad.com/ahmad%20hamesh"

console.log(url.replace('%20', '-')) //replace

console.log(url.includes('sunder')) //serach the things

console.log(gameName.split('-'));

