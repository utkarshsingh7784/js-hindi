class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "utkarsh@cm", "123")
chai.addCourse()
// chai.logMe()


const masalaChai = new user("masala chai")
masalaChai.logMe()

console.log(chai instanceof Teacher);