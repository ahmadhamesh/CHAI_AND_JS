//array

// const myArr = [0, 1, 2, 3, 4, 5 ] //inside array every array we called elements and its value will anything like string number boolean or mixed

// const myArr1 = [0, 1, 2, 3, 4, 5, true, "ahmad"]

// console.log(myArr[0])

/* 
a collection of multiple items under a single variable 
js array are resizeable means after defining can add more elements
mix of different data type

interview question
array copy operation create shallow copy
A shallow copy of an object is a copy whose properties shares the same reference point


*/
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Captain America", "Iron man"]

const myArr2 = new Array(1, 2 ,3, 4)
// console.log(myArr[1])

//Array Methods

// myArr.push(6)  //to add values in 
// myArr.push(7)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9) //to add a vlaue in start array
// myArr.shift() // to shift 1 right value in start array
// console.log(myArr)

// console.log(myArr.includes(9)); // in this array 9 is included or not 
// console.log(myArr.indexOf(9)) //in this output is -1 because its does not exist

// console.log(myArr.indexOf(3)) //in this output is 3 because its exists coz it have postive value

//join adds all the elements of an array into a sting
const newArr = myArr.join()

// console.log(myArr) //its array
// console.log(newArr) //it output is bind the array and change into string
// console.log(typeof newArr) //output string

//slice, splice

console.log("A", myArr)
const myn1 = myArr.slice(1, 3) //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.

console.log(myn1);
console.log("B", myArr)

const myn2 = myArr.splice(1, 3) //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted element
console.log("C", myArr) //splice remove the array and manipulate the orignal array is removed array but in slice not manipulate orignal array
console.log(myn2)

/*
interview question slice and splice
*/


