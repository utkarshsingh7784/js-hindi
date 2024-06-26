// var c = 300

let a = 200
if (true) {
    const a = 12
    let b = 20
    // console.log("inner",a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const userNAme = "utkarsh"

    function two(){
        const website = "google"
        // console.log(userNAme);
    }
    // console.log(website);
    two()
}
// one()


//if else 

if (true) {
    const userNAme = "amit"

    if (userNAme === "amit") {
        const website = " youtube"
        // console.log(userNAme + website);
    }
    // console.log(website);
}
// console.log(userNAme);

//+++++++++++++++++++++++==intersting+++++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1
}


console.log(addTwo(5));
const addTwo = function(num){
    return num + 1
}


