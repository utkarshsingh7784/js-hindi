// const myNum = [1,2,3,4]
// const myTotal = myNum.reduce(function (accu,currval){
// console.log(`acc:${accu} and currval:${currval}`);
//  return accu + currval
// },0)

//or
//arrow function
// const myTotal = myNum.reduce( (accu,currval)=> accu+currval, 0 )
// console.log(myTotal)

//example

const shoppingCart = [
    {
        itemName: "javascript",
        Price: 2999
    },
    {
        itemName: "python",
        Price: 999
    },
    {
        itemName: "dsa",
        Price: 12999
    },
    {
        itemName: "web dev",
        Price: 5999
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.Price, 0)
console.log(priceToPay);