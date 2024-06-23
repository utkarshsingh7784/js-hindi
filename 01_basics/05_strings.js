const name = "utkarsh"
const repoCount = 50
// console.log(`hello my name is ${name} and my repocount is ${repoCount}`);


const gameName = new  String('amit')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const gameChar = new String("abcdef-gh")
const newStr = gameChar.substring(0,6)
// console.log(newStr);
const anotherChar = gameChar.slice(-8,4)
// console.log(anotherChar);

console.log(gameChar.split('-'));

const stringOne = "   hello   "
// console.log(stringOne);
// console.log(stringOne.trim());

const url = "https://utkarsh.com/utkarsh%20singh"
// console.log(url.replace('%20','-'));
// console.log(url.includes('utkarsh'));