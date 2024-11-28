function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}


function createUser(username, email, password){
    //we use a method to call setUsername function call in this username using call method
    //Calls a method of an object, substituting another object for the current object
    SetUsername.call(this, username)

    this.email = email
    this.password = password

}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
