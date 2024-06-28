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
// const newNums = myNums.filter( (nums) => {
//     return  nums > 4
// } )
// console.log(newNums);



//for each loop
// const otherNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         otherNums.push(num)
//     }
// })
// console.log(otherNums);


const book = [
    {  title: 'book one', genre: 'fiction', publish: '1991', edition: '2004'},
    {  title: 'book two', genre: 'non-fiction', publish: '1993', edition: '2005'},
    {  title: 'book three', genre: 'comedy', publish: '1992', edition: '2000'},
    {  title: 'book four', genre: 'fiction', publish: '2001', edition: '2007'},
    {  title: 'book five', genre: 'non-fiction', publish: '1996', edition: '2014'},
    {  title: 'book six', genre: 'history', publish: '1987', edition: '2016'} 
];

// let userBook = book.filter( (bk) => bk.genre === 'non-fiction')

// userBook = book.filter( (bk) => { return bk.publish >= 2000})

// userBook = book.filter( (bk) => {
//     return bk.publish >= 1985 && bk.genre === "history"
// })

console.log(userBook);


