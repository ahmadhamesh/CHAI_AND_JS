function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("M");
    console.log("E");
    console.log("S");
    console.log("H");

}

// sayMyName()

// function addTwoNumbers(number1, number2){ //here are parameters
//     console.log(number1 + number2)
// }

// const result = addTwoNumbers(3, "4") //aurguments
// console.log(result) //its value is udefined because we didnt return the value inside function
// addTwoNumbers(3, null)


function addTwoNumbers (number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2 //after retrun code will not work
    console.log("hamesh"); //this code is unreachable this will not print
}
const result = addTwoNumbers(3, 5)
// console.log("result:", result)

function loginUserMessage(username = "Sam") { //giving the default value if there is value is not defined
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hamesh")) //this value is override the sam value


function calculateCartPrice(val1, val2, ...num1){ //here it is a rest operator its depends on where we use it
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) //using val1,val2 so it left val1 and val2 shwoing only 500, 2000

// use a Object inside a function
const user = {
    username: "hamesh",
    price: 199
}

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObjects(user)
//also can use an object inside a function call
handleObjects({
    username: "sam",
    price: 399
})

//use function which accept the array value
// const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 100, 600]));


