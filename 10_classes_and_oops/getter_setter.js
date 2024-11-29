//if you dont want that anyone can easily access the value we use getter setter

class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    //getter
    get password(){
        return `${this._password}hamesh`
    }
    //setter
    set password(value){
        this._password = value.toUpperCase()
    }
}

const hamesh = new User('hamesh@abc.ai', "abc")
console.log(hamesh.password);
console.log(hamesh.email);
