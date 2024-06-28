const coding  =["python","javascript","cpp","css","html"]

//function
// coding.forEach( function (val) {
//     console.log(val);
// })

//arrow function
// coding.forEach( (item) => {
// console.log(item);
// })

//other method

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


//other method
coding.forEach( (item,index,arr)=> {
console.log(item,index,arr);
})

// this type - [{},{},{}]   (object inside array)

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"

    },
    {
        languageName : "java",
        languageFileName : "java"

    },
    {
        languageName : "python",
        languageFileName : "py"

    }
]
myCoding.forEach( (item) => {
  console.log(item.languageFileName);
})