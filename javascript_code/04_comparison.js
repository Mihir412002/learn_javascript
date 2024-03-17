"using strict"

console.log(2==2);//true
console.log(3 > 4);//false
console.log(5 < 6);//true
console.log(7 >= 8);//false
console.log(9 <= 10);//true
console.log(11 != 11);//false
console.log(11 != 12);//true

console.log("*******************************************************");

console.log("21" < "2");//false
console.log(12 < 3);//false
console.log("22" > 21);//true
console.log(23 > "1");//true

console.log("*******************************************************");

console.log(null == 0);//false
console.log(null > 0);//false
console.log(0 < null);//false
console.log(0 <= null);//true
console.log(null <= 0);//true
console.log(0 >= null);//true
console.log(null >= 0);//true
console.log(null >= null);//true

console.log(null != null);//false
console.log(null != 0);//true
console.log(null == null);//true
console.log(null == 0);//false
//also aovid this type of comparisons not sensible and there is drawback of language as well not clarity

//IN JAVASCRIPT COMPARISON AND EQUALITY(==) CHECK BOTH ARE DIFFERENT 


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);//avoid this type of compariosns

// STRICT CHECK IS ALSO THERE MIEANS (===) MEANS CHECKS NOT ONLY VALUE ALSO FOCUS ON TYPE OF VALUE

console.log("*************************************************************************************");

console.log("2"===2);//false
console.log("2"==2);//true

