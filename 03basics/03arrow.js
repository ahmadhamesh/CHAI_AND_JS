const user = {
    username : "hamesh",
    price : 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to websiste`);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)


// function chai(){
//     console.log(this)
// }
// chai()

// const chai = function () {
//     let username = "hamesh"
//     console.log(this.username)
// }
// chai()


//arrow function
// const chai = () =>{
//     let username =  "hamesh"
//     console.log(this)
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4))


// const addTwo = (num1, num2) => num1+ num2 // if you write a {} you have to write return otherwise no need to write
// const addTwo = (num1, num2) => (num1+ num2) //this is use in reat

// console.log(addTwo(3, 4))


const addTwo = (num1, num2) => ({username:"hitesh"}) //if you write a object then you have to write ({}) like this
console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7]
// myArray.forEach()