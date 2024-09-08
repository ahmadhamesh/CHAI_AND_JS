//topics
//map

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// to update the number value
// let newNums = myNumber.map ( (num) => {return num + 10})
// console.log(newNums);

// using 2 maps and filter
const newNums = myNumber
                .map((num) =>  num * 10)
                .map( (num)=> num + 1) //here you get num updated value like 10, 20
                .filter( (num) => num >= 40)

console.log(newNums);



//using for each
// let newNums = myNumber.forEach( (item)  => {
//     console.log(item)
//     return item

// })
// console.log(newNums)