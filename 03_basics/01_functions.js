// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }
// const result = addTwoNumbers(3,5)
// console.log("Result: ", result);  //check value inside result

//method-2
// function addTwoNumbers(number1,number2){
//     // let result = number1 + number2
//     // return result

//        //or

//        return number1 + number2

// }
// const result = addTwoNumbers(3,5)
// console.log("Result: ", result);


//method-3
// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// // console.log(loginUserMessage("utkarsh"));
// console.log(loginUserMessage());


//method-4
// function loginUserMessage(username){
//     if(username === undefined){
//    console.log("please enter a user name");
//     return
//     }
//     return `${username} just logged in`
// }
// // console.log(loginUserMessage("amit"));
// console.log(loginUserMessage());

//rest

//  function calculateCartPrice(val1,val2,...num1){
//     return num1
//  }
//  console.log(calculateCartPrice(200,400,500,2000));

//how to pass object in function

const user = {
    username:"utkarsh",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
  
//or
handleObject({
  username:"amit",
  price:399
})

//how to pass array in function

const myArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myArray));
//or
console.log(returnSecondValue([200,300,400,500]));



