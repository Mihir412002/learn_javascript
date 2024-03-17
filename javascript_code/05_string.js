"using strict"

// there are two ways to declare string

const str = "ham sath sath he"
const temp = new String('Kuch-Kuch-Hota-he')



// there are two ways two concat or print string

console.log(str);
console.log(temp);

console.log(`${str} tabhi to ${temp}`);

// there are different methoss also

//length used to get size of string
console.log(temp.length);


//toUpperCase and toLowerCase used to convert uppercase or lowercase letters to string
console.log(temp.toUpperCase());
console.log(temp.toLowerCase());

//IndexOf used to get index of particular element and CharAt used for particular charater present at which position in string
console.log(str.charAt(5))//a
console.log(str.indexOf('s'))//4

//includes used to find marticular substring prsent or not gives boolean output
console.log(temp.includes("Kuch"));//true

//trim,starttrim,endtrim used to remove space and nextline from string if prseent

console.log(temp.trim());//Kuch-Kuch-Hota-he

const thik = "         ha thik hu           "
console.log(thik.trim());//ha thik hu 

//used merge two string
console.log(str.concat(temp));//ham sath sath he Kuch-Kuch-Hota-he'
 

//substring used to get a part of string
console.log(temp.substring(0,5))//Kuch-

//slice also work same as substring but it is used for reverse work becuase it has able to work negative valueslike

console.log(temp.slice(-6,5))//-Hota

//split is used to convert string to array via some common term prseemt in strig like
console.log(temp.split('-'));//[Kuch ,Kuch, Hota ,he]

//replace is used to replace particulat character from string
const propose = " I love you"
console.log(propose.replace('love','hate'));//Kuch nhi-Kuch nhi-Hota
console.log( propose)
