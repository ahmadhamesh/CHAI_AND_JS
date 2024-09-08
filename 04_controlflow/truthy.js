//Topics 
//Truthy , Falsy, Nullish Coalescing Opeator (??), Terniary Operator

const userEmail = "h@hamesh.ai"
//truthy value when we dont give any oprator to compare
if (userEmail) {
    console.log("Got the useremail")
} else {
    console.log("Don't have user email");
    
}

// falsy value
// false, 0 , -0, BigInt (0n), "", null, undefined, NaN

 //truthy value
 //"0", 'false", " ", [], {}, function(){}

 //checking that array is empty
//  if (userEmail.length === 0) {
//     console.log("Array is empty")
//  }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

//Nullish Coalescing Opeator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 //if got any value then print it otherwise print null
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)


//Terniary Operator 
// condition ? ture : false

const iceTeaPrice = 100;
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");
;
