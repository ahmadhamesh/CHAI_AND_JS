const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

//output descripter
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const chai = {
    name: "ginger chai",
    price: 250,
    isAvaiable : true,
    orderChai: function(){
        //code fatt gya h we dont need full unction in object we need key value
        console.log("chai ni bani");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//to change the properties
Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false,
    
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (const [key, value] of chai) {
//     console.log(`${key} : ${value}`);
    
// }
//output TypeError: chai is not iterable

//to change usee entries
for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);   
    } 
}
