// const coding  =["python","javascript","cpp","css","html"]

//   const values  =  coding.forEach( (item)=> {
 //  console.log(item);
//  return                  
// })
// console.log(values);    //for each koi bhi value return nhi karta hai


//filter - value return karta hai
const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (nums) => nums > 4)
// console.log(newNums);

//or
const newNums = myNums.filter( (nums) => {
    return  nums > 4
} )
console.log(newNums);