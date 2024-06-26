 const user  = {
    username : "utkarsh",
    price:999,
    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`);
        // console.log(this);
    },
 }
//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

console.log(this);  //node environmemt ke ander this print karne par {}(empty object)  aata hai
//jabki normal browser pe console ke inside print karne par window show hota hai
//browser ke ander global object hai window object


//jab kisi function ke inside (this) ko print karte hai node environment ke inside toh bahut saari value aati hai
//example

function chai(){
    let username = "amit"
    // console.log(this);
    //or
    // console.log(this.username); //ye context object ke inside work karta hai.ise function ke inside this use nhi kr pa rha hu
}
chai()

//2nd method

// const chaii = function (){
//     let username = "amit"
//     console.log(this.username)
// }
// chaii()

//arrow function
// const chaii =  () =>{
//         let username = "amit"
//         console.log(this)
//     }
//     chaii()

//basic arrow function (explicit return)

// const addThree  = (num1,num2)=>{
//     return num1 + num2
// }
// console.log(addThree(3,4));


//implicit return

// const addThree  = (num1,num2)=> num1 + num2
//0r

// const addThree  = (num1,num2)=> (num1 + num2)

//object return
const addThree  = (num1,num2)=> ({username: "amit"})

console.log(addThree(3,4));