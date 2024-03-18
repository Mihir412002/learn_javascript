// "using strict"

// const marks = new Number(93)
// console.log(marks);

// //there are different prototypes in js for numbers are toString(),toFixed(),toPrecision(),toLocalString(),MAX_SAFE_INTIGER,MAX_VALUE,MIN_VALUE,isNaN,length

// const first_num = new Number(234)
// console.log(first_num.toString());
// console.log(first_num.toString.length);

// const sec_num = new Number(4094)
// console.log(sec_num.toFixed(2));


// const thr_num = new Number(5234)
// console.log(thr_num.toPrecision(2));

// const four_num = new Number(424)
// console.log(four_num.toLocaleString('en-IN'));


// const five_num = new Number(9875)
// console.log(five_num.MAX_SAFE_INTEGER);


// const six_num = new Number(7985)
// console.log(six_num.MAX_VALUE);

// const sev_num = new Number(4857)
// console.log(sev_num.MIN_VALUE);

// const eight_num = new Number(754)
// console.log(eight_num.isNaN);


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//
                                 //$MATH??//

//THERE ARE DIFFERENT MATH FUNCTIONS ARE :- abs(), round() , ceil() , floor() , min(), max() , Math.random() its value always between 0 to 1 , 

const num1 = -24
console.log(Math.abs(num1));

const num2 = 42.456
console.log(Math.round(num2));

console.log(Math.ceil(num2));

console.log(Math.floor(num2));

console.log(Math.min(2,5,74,3,6,85));

console.log(Math.max(32,46,7,45,88,6));

console.log(Math.random());

console.log(Math.floor(Math.random()*10) + 1);

const min = 22
const max = 34
console.log(Math.floor(Math.random()*(max - min + 1)) + min);
