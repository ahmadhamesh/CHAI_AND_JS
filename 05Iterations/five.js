// topics
// forEach,

// for  higher order function

// callback function is a function without name
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ //this is a callback funtion
//     console.log(val)
// } )

// coding.forEach( (item)=> {
//     console.log(item);
    
// })



// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item,index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        langaugeName : "javascript",
        langaugeFileName : "js",
    },
    {
        langaugeName : "python",
        langaugeFileName : "py",
    },
    {
        langaugeName : "java",
        langaugeFileName : "java",
    }
]
// you can use a loop using for each you can access
myCoding.forEach( (item)=> {
    console.log(item.langaugeFileName);
    
})