//Immediately Invoked Function Expressions (IIFE)
// to remove global variable polltion we use iife

(function chai(){
    console.log(`DB CONNECTED`)
})();
 
// ( () => {
// console.log(`DB CONNECTED TWO`)
// })()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('hamesh')