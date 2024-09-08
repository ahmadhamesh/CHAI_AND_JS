//topics
// forEach, fiter, API filter,

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {

//     console.log(item)
//     return item
// })

// console.log(values);



//filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4  //arrow.js file we mentioned why we use return here
// })
// console.log(newNums) //output: [ 5, 6, 7, 8, 9, 10 ]


// doing same using forEach
// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums)


const books = [
    {title: 'Booke One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Booke two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Booke three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Booke four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Booke five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Booke six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Booke seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Booke eight', genre: 'Science', publish: 2011, edition: 2016},
]

//find books which have on hsitory
let userBooks = books.filter( (bk) => bk.genre === 'History')

//find a book which is publish after 2000
userBooks = books.filter( (bk) => {return bk.publish >= 2000})
//after 1995 and history book
userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === 'History')
console.log(userBooks);





