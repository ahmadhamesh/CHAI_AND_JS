//topics

//for of (array specific loops), Maps,

// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num)
// }



// const greeting = "Hello World!"

// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
    
// }



// Maps
const map = new Map()
map.set('IN', "India") //output 'IN' => 'India', //its similar to an object 
map.set('USA', "United States of America")// 'USA' => 'United States of America',
map.set('Fr', "France") // 'Fr' => 'France' //fr is key and value is frnace
map.set('IN', "India") //map is not giving duplicate value because it giving uniqe value

// console.log(map)


// Array destructuring
for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for (const [key, Value] of myObject) {
//     console.log(kay, ':-', value)
// } //this is a object is not iterateable, for of is not working here
