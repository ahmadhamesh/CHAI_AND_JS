//topics
//

const score = 400
console.log(score);

// defining data type number
const balence = new Number(100)
console.log(balence)

console.log(balence.toString().length)
console.log(balence.toFixed(2)) //use toFixed in ecommerce website 2

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)) //presided value means round of number 123.8966 take 124

const anotherNumber = 1123.8966
console.log(anotherNumber.toPrecision(3)) //1.12e+3, 3 precison value and exponential 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));// shows the comma 10,00,000


// +++++++++++++++++ Maths +++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.7))
// console.log(Math.ceil(4.2)) //max value ceiling means top value mean 4.7 is 5
// console.log(Math.floor(4.7))// lowest value like 4
// console.log(Math.min(4, 3, 6, 8))
// console.log(Math.max(4, 3, 6, 8))

console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor((Math.random()*10) +1));

//question generate a number between 10 to 20
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min))





