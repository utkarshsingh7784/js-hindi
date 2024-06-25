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


console.log(obj3);

