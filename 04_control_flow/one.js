// const isUserLOggedIn = true
// const temperature = 42

// if (temperature < 50) {
//      console.log("executed");
// }else{
//     console.log("temperature is greayer than 50");
// }

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`);


// const  balance = 1000
// if (balance > 500)  console.log("test"),console.log("text1");  not good practice

// if (balance < 500) {
//     console.log("less than");
// }else if(balance < 750){
//      console.log("less than 750");
// }
// else if(balance < 900 ){
//   console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }


//rea life example
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const LoggedInfromEmail = true

if (userLoggedIn && debitCard ) {
    console.log("allow to buy a course");
}
if (loggedInFromGoogle || LoggedInfromEmail ) {
    console.log("user logged in");
}