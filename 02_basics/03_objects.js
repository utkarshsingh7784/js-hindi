//object ko singlton bhi kr skte hai. aur object literals ko bhi kr skte hai


// singleton means- koi bhi constructor se jab aap banate hai toh singleton ek object banta hai.
//yaani ye apni tarike ka ek hi objet hai.

// object.create - isi ko bolte hai  constructor method. isi ke andar singleton banta hai


//object literals
const muSym = Symbol("key1") //symbol ko object ke inside add karna

const jsUser = {
    name:"utkarsh",
    "full name": "utkarsh singh",
    [muSym]:"mykey1",
    age:20,
    location:"jaipur",
    email:"yahoo@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","friday"]
}
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log( jsUser[muSym]);

// jsUser.email = "yahoo@chatgpt.com" //value overwrite
//   Object.freeze(jsUser)           //object-freeze method
//   jsUser.email  = "anc@gmail.com"
//   console.log(jsUser);

   jsUser.greeting = function(){    //function inside object
    console.log("hello js user");
   }   
//    console.log(jsUser.greeting);   //function execute nhi hua. only function ka reference aaya hai 
   
               

jsUser.greetingTwo = function(){           //object ke inside value ko reference karna
    console.log(`hello js user, ${this.name} `);  //same object ko reference karne ke liye this
   }                                     
  console.log(jsUser.greeting());
  console.log(jsUser.greetingTwo());








