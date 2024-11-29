//_email in this _ use for make private property but in es2022 we use #
const User = {
    _email: 'hamesh@ah.com',
    _password: "abc",


    get email(){
    return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
