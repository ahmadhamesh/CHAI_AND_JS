//topics
//reduce

const myNums = [1, 2, 3]

// const myTotal =  myNums.reduce(function(acc,curr){ //accumulator, current value
//     console.log(`accumulator: ${acc} and current value ${curr}`)
//     return acc +curr
// }, 0) //0 is inital value where to start accumulator


//same code using arrow Function
const myTotal = myNums.reduce( (acc, curr) => acc+curr,0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price : 1999,
    },
    {
        itemName: "py course",
        price : 3999,
    },
    {
        itemName: "mobile dev course",
        price : 4999,
    },
    {
        itemName: "Data Science course",
        price : 12999,
    },

]

const pricetOPay =  shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(pricetOPay);
