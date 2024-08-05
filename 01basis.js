//let var const

const accountId = 143232
let accountEmail = "ahmad12@gmil.com"
var accountPassword = "12345"
accountCity = "Uttar Pradesh" //you can use this to reserve memory but this is not correct way

let accountState
//accountId = 2 //not allowed


accountEmail = "ah123@gmail.com"
accountPassword = "212121"
accountCity = "Delhi"

/*notes
Prefer not to use var
because of issue in block and functional scope


*/


console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

