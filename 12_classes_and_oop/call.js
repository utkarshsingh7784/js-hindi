function setUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUsername(username,email,password){
   
    setUsername.call(this, username)

    this.email = email, 
    this.password = password
}

const chai = new createUsername("amit","hello@cm","123")
console.log(chai);