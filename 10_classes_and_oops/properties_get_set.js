//old setter getter 
//getter and setter through define properties

function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this._email, 'email', {
        get:function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);
