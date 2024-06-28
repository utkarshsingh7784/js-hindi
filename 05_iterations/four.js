const myObj = {
    js : 'javascript',
    ruby : 'ruby',
    py : "python",
    swift : "swift by apple"
}

    for (const key in myObj) {  //for  object print we use for in loop
    //    console.log(`${key} shortcut for ${myObj[key]}`);
    }

    

    //what we can print array from for in loop 
const programming = ["js","ruby","py","java","cpp"]
  for (const key in programming) {
    //    console.log(key);  //key print karne se arrays ki key aayi hai

    // console.log(programming[key]);
  } 
 
//map for in loop

// const map = new Map()
// map.set('IN',"INDIA")
// map.set('FR',"FRANCE")
// map.set('CH',"CHINA")
// map.set('CH',"CHINA")

// for (const key in map) {  //is tarah se map ke upar iteration nhi kiya ja sakta
//    console.log(key);
// }


    