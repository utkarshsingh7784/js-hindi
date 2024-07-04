// let myName = "utkarsh        "
// let myChannel =  "chai     "
// console.log(myName.trueLength);


let anotherUserName = "chaiaurcode     "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}
anotherUserName.truelength()

"utkarsh".truelength()
"icetea".truelength()




















let myHero = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman:"sling",
    getSpiderPower : function(){
   console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.utkarsh = function(){
    console.log(`utkarsh is present in all object`);
}

Array.prototype.heyUtkarsh = function(){
    console.log(`utkarsh say hello`);
}


// heroPower.utkarsh()
// myHero.utkarsh()
// myHero.heyUtkarsh()
// heroPower.heyUtkarsh()


//inheritance

//previous approach
const user = {
    name:"chai",
    email: "chai@code"
}

const Teacher = {
    makeVideo : true
}

const TeacherSupport = {
    isAvailable : true
}

const TASupport = {
    makeAssignment : "js assignment",
    fullTime: true,
    __proto__ : TeacherSupport
}

Teacher.__proto__ =  user

//modern syntax
Object.setPrototypeOf(TeacherSupport,Teacher)



