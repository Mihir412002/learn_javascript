"using strict"

//falsy values - false,0,-0, BigInt 0n, "", null, undefined, NaN 
//truthy values - "0", 'false', "  ", [], {}, function (){}


// const arr = 0
// if(arr){
//     console.log("this is array");
// }


// const emptyObject = {}

// if(Object.keys(emptyObject).length === 0){
//     console.log("object is empty");
// }

//Nullish collisiones Operator(??): ti=o handle null,defined

// let val1;
// val1 = 5 ?? 10
// //val1 = null ?? 10
// //val1 = undefined ?? 15
// //val1 = null ?? 10 ?? 20 //jo first tvalue hogi vo jese 1-0 yaha pe

// console.log(val1);

//terniary operator it is like short form for if-else

//condition ? true : false

const icecreamprice = 100

icecreamprice < 200 ? console.log("I will purchase") : console.log("it is expensive for me")