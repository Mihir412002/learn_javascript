// }//if you are in node environment than this keyword reffers { object} like console.log(this)

// chai()

// function chai() {
//      const username = "mihir"  //giving undefines means we can use this in funtion only in object we ccan use to reffer
//     console.log(username.this);
    
// }

// chai()

// const chai = () => {
//     const username = "mihir"  //giving undefines means we can use this in funtion only in object we ccan use to reffer
//    console.log(this.username);
   
// }


// const ticket = () => {
//     const ticket_no = "2344DC"
//     console.log(ticket_no);
// }

// ticket()


// const addTwo = (num1,num2) => {
//     return num1 + num2
// }



// console.log(addTwo(2,3));



//implicit return arrow function

// const  subone = (num) => num-1
// console.log(subone(3));

// const  subone = (num) => (num-1)
// console.log(subone(3)); //with parenthesis

//if you want to written object

const  subone = (num) => {username: "mihir"}
console.log(subone(3));
//direct it is not working you can easy without parenthesis


//with parenthesis
const  subon = (num) => ({username: "mihir"})
console.log(subon(3));



//object ko ham return nhi kar sakte without parenthesisi usko return karne ke liye parenthesis me rapp up karna hi padega



