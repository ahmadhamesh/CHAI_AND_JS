//dates

// let myDate = new Date()
// console.log(myDate) //2024-08-24T10:35:40.224Z
// console.log(myDate.toString()); //Sat Aug 24 2024 16:05:40 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Sat Aug 24 2024
// console.log(myDate.toISOString()); //2024-08-24T10:35:40.224Z
// console.log(myDate.toJSON()); //2024-08-24T10:35:40.224Z
// console.log(myDate.toLocaleString()); //24/8/2024, 4:05:40 pm
// console.log(myDate.toLocaleDateString()); //24/8/2024

// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23) 
// let myCreateDate = new Date(2023, 0, 23, 5, 3) 
let myCreateDate = new Date("01-14-2023") 

// console.log(myCreatedDate.toDateString()) //Mon Jan 23 2023

// console.log(myCreateDate.toLocaleString()) //23/1/2023, 5:03:00 am

let myTimeStamp = Date.now()

// console.log(myTimeStamp)//milisec  value
// console.log(myCreateDate.getTime()) //milisec  value
// console.log(Date.now) //milisec  value
// console.log(Math.floor(Date.now()/1000)) //converted value in seconds

let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getMonth()+1)

// `${newDate.getDay()} and the time is ${newDate.getTime()}`

//custamize the properties
newDate.toLocaleString('default', {
    weekday: "long",
    
})

