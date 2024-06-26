//const tinderUser = new object()   (singleton object)
const tinderUser = {}   //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{                               //object inside object
        firstname:"amit",
        lasrname:"kumar"
    }
}
// console.log(regularUser.fullname.firstname);


//object combine
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}

// const obj3 = {obj1,obj2}
//or
// const obj3 = Object.assign({}, obj1, obj2, obj4)
//or
const obj3 = {...obj1,...obj2,...obj4}

// console.log(obj3);

//data base se return value format

const user = [
    {
        id:1,
        email:"hello@"
    },
    {
        id:1,
        email:"hello@"
    },
    {
        id:1,
        email:"hello@"
    },
]
user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //check value exist or not

//object destructure

const course  ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"utkarsh"
}

    const {courseInstructor} = course
    // console.log(courseInstructor);
              //or
    // const {courseInstructor:instructure} = course  //destructure
    // console.log(instructure); 
   
   //api

// {
//     "name":"utkarsh",
//     "coursename":"js in hindi",
//     "price":"free"

// }

[
    {},
    {},
    {}
]