let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let createDate = new Date (2024,5,23)
// console.log(createDate);
let myCreate = new Date (2024,5,23,5,3)
// console.log(myCreate.toLocaleString());

let setTime = new Date ("12-01-2024")
// console.log(setTime.toLocaleString());

let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(setTime.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
newDate.toLocaleString('default',{
    weekday: "long"
})
