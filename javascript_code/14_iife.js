//Immediately Invoked Function Expression

// function system() {
//     console.log("runnning");
// }

// system() simple way of funtion without iife

//with iife

// (function Shopping() {
//     console.log("Items");
    
// })();

//global scope ke pollution se dikkat hoti he kai baar to usi
// global scope ke variables ko hatane ke liye hamane iife ka use kiya 

// ((name) => {
//     console.log(`My name is ${name}`);
// })("mihir");

//if you hav two iife in your code use semicolon otherwise it will not excute