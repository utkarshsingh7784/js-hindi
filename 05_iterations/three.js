const arr = [1,2,3,4,5]
for (const val of arr) {
    // console.log(val);
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}


//MAP
const map = new Map()
map.set('IN',"INDIA")
map.set('FR',"FRANCE")
map.set('CH',"CHINA")
map.set('CH',"CHINA")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-', value);
}

//object

const myObj = {
    game1 : "NFS",
    game2 : "SPIDERMAN"
}
// for (const [key, value] of myObj) {  //we dont print object like this.we have diffrtent method to print this
//     console.log(key, ':-', value);
// }
