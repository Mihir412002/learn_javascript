"strict type"

let s = "33"

let n = Number(s)

console.log(n)//33

console.log(typeof n)//number

console.log(typeof s)//string

let j = "44and3nd"
j = Number(j)
console.log(j) //NaN
console.log(typeof j)//number

//NaN value is number type of value its full form is not a number

//there are two ways to do type of as a function as well we can 

console.log(typeof(j))

//conversion of boolean like

let d = true
d = Number(d)
console.log(d)
console.log(typeof(d))

let c = false
c = Number(c)
console.log(c)
console.log(typeof(c))

/* 
Possible Conversion

string => Number
Number => String
Number => Boolean
Boolean => Number
String => Boolean
Boolean => String
*/

let x = true
console.log(typeof(x))
console.log(x)
x = String(x)
console.log(typeof(x))
console.log(x)
