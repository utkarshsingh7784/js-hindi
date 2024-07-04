// class user {
//      constructor(username,email,passowrd){
//         this.username = username;
//         this.email = email;
//         this.passowrd = passowrd
//      }
//      encryptedPassword(){
//         return `${this.passowrd}abc`
//      }
//      changeUsername(){
//         return `${this.username.toUpperCase()}`
//      }

// }

// const chai = new user("amit","hello@cm","123")
// console.log(chai.encryptedPassword());
// console.log(chai.changeUsername());

//agar class ka syntax nhi mila hota toh --- behind the scene

function user(username,email,passowrd){
    this.username = username;
    this.email = email;
    this.passowrd = passowrd
}

user.prototype.encryptedPassword = function(){
      return `${this.passowrd}abc`
}

user.prototype.changeUsername  = function(){
       return `${this.username.toUpperCase()}`
}

const tea = new user("amit","utkarsh@cm","123")
console.log(tea.encryptedPassword());
console.log(tea.changeUsername());
