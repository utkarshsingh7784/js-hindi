class user {
    constructor(email, password) {
        this.email = email,
            this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        // return this._password.toUpperCase()
        //or
        return `${this._password}utkarsh`
    }

    set password(value) {
        this._password = value
    }
}

const chai = new user("utkarsh@cm", "abc")
console.log(chai.password);
console.log(chai.email);