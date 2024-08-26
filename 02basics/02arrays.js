const marvel_heros = ["Thor", "Hulk" , "Ironman"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros)

//these are not good code we use concat
// console.log(marvel_heros) // [ 'Thor', 'Hulk', 'Ironman', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvel_heros[3][1]) //flash

// const allHeros = marvel_heros.concat(dc_heros)  //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(allHeros)


//we use spread operator to replace concat
// spread operators //very important

const all_new_heros =  [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6],7,[6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array) //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


console.log(Array.isArray("Ahmad"))
console.log(Array.from("Ahmad"))
console.log(Array.from({name: "Ahmad"})) //interesting becz of key showing empty array [] \

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



