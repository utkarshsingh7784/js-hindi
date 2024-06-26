(function chu(){
    //named iife
    console.log(`DB CONNECTED`);
})();

(() => {
    console.log(`DB CONNECTED TWO`);
})();

((name) => {
    //unnamed or simole iife
    console.log(`DB CONNECTED TWO ${name}`);
})("amit");