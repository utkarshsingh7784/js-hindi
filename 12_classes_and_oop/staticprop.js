class user {
     constructor(username){
        this.username = username
     }

     logMe(){
        console.log(`USERNAME: ${this.username}`);
     }

     static createId(){
        return `123`
     }
}
const utkarsh = new user("utkarsh")
// console.log(utkarsh.createId())



class Teacher extends user {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("amit", "utkarsh@cm")
iPhone.logMe()