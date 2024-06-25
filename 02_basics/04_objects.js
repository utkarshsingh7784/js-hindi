//const tinderUser = new object()   (singleton object)
const tinderUser = {}   //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);