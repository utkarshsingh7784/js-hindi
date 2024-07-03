//promise create
const promiseOne = new Promise (function(resolve,reject){
  //do any async task
  //DB calls, cryptography,network
  setTimeout(function(){
console.log('async task is complete');
resolve()
  },1000)
})

//promise consumed
promiseOne.then(function(){
    console.log("promise consumed");
})

//second promise
new Promise(function(resolve,reject){
    setTimeout(function(){
     console.log('async task 2');
     resolve()
    },1000)
    }).then(function(){
        console.log("async task 2 completed");
})

//promise third

const promoseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai", email:"chai@code.com"})
    })
})
promoseThree.then(function(user){
  console.log(user);
})

//promise four

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"utkarsh", password:"123"})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})
promiseFour
.then( (myuser)=>{
 console.log(myuser);
 return myuser.username
}).then( (myusername)=>{
  console.log(myusername);
}).catch(function(err){
    console.log(err);
}).finally(() => console.log("the promise is either resolved or rejected"))


//promise five

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"utkarsh", password:"123"})
        }else{
            reject('ERROR: js went wrong')
        }
    },1000)
})
//2nd method promise consumed

async function consumePromiseFive(){
    try {
         const response = await promiseFive
         console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()