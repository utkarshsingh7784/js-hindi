const user = {
    _email: "utkarsh@cm.com",  // _ shows the private property. ya ye normal users ke use me nhi ayegi
    _password: "utkarshcm",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
     this._email  =value
    }
}

const tea = Object.create(user)
console.log(tea.email);