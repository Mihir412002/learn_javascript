"using strict"
//global scope

let a = 300

if(true){
    let a = 1;
    const b = 2;
    var c = 3;
    console.log("INNER: ",a);
}//block scope

console.log("OUTER: ",a);

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

// console.log(b);

console.log(c);

