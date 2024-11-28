//prototype
let myName = 'hamesh     '  
let myChannel = 'Chai    ' 

// console.log(myName.trim().length);
// console.log(myName.truelength);




let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.hamesh = function(){
    console.log(`hamesh is present in all Objects`);
    
}

Array.prototype.heyHamesh = function(){
    console.log(`Hamesh says hello`);
    
}

// heroPower.hamesh()
myHero.hamesh()
myHero.heyHamesh()
// heroPower.heyHamesh()

// inheritance
//protype inheritance
const User = {  
    name: 'chai',
    email: 'chai@google.com'
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssingment: "JS Assignment",
    fullTime: true,
    __proto__ : TeachingSupport //you can use this
}
// or you can use this
//this both are older
Teacher.__proto__ = User
//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiAurCode    "

String.prototype.trueLength = function () {
    console.log(`${this}`);

    console.log(`True length is : ${this.trim().length}`);    
}


anotherUserName.trueLength()
'hamesh'.trueLength()
'iceTea'.trueLength()