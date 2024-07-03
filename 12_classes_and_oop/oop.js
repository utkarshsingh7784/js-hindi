//object literals
const user = {
    username : "amit",
    loginCount : 8,
    signedIn : true,

    getUsersDetails:function(){
    //     console.log("got user details from database");
    // console.log(`username: ${this.username}`);
    console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUsersDetails());
// console.log(this);


//constructor function

function users(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`welcome ${this.username}`);
    }
    return this
}

const userOne = new users("amit",12, true)
const userTwo = new users("hello","11","false")
console.log(userOne);
console.log(userTwo);