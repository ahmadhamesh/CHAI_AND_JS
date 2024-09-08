// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        username:{
            firstname : "Ahmad",
            lastname : "Hamesh"
        }
    }
}

// console.log(regularUser.fullname.username.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1, obj2}
// console.log(obj3)
// const obj3 = Object.assign({}, obj1, obj2, obj4) //to merge objects {}empty array is assure that you get merged value
// console.log(obj3)

// using spread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// how we use in database
const users = [
    {
        id: 1,
        emali: "h@gmail.com"
    },
    {
        id: 2,
        emali: "i@gmail.com"
    },
    {
        id: 3,
        emali: "j@gmail.com"
    },
    {
        id: 4,
        emali: "k@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)) //returns value in array now ypu can use loops, 
// console.log(Object.values(tinderUser)) // to access values onlys
// console.log(Object.entries(tinderUser)) 

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to find value is exist or not ans will be in boolean


//Destrcturing Object //important
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor //both are same . and {}
const{courseInstructor} = course //using destructuring usnig in react


console.log(courseInstructor);
//you can destructure and assign a value to courseInstructor to instructor and access with console
const{courseInstructor :instructor} = course
console.log(instructor);

//this is a json its a object and keys and values both use as a string write in "" except number and boolean and other data type values 
// {
//     "name": "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
//object file should be share as a json file 
[
    {},
    {},
    {}
]


