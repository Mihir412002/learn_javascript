"usign strict"

//ACCORDING TO MEMORY DISTRIBUTION THERE TWO TYPES OF DATATYPES
// 1.PRIMITIVE :- There are 7 types 
//                1.String
//                2.Number
//                3.Boolean
//                4.null
//                5.undefined
//                6.Symbol - for uniqueness
//                7.Bigint - large numbers 


// EXAMPLES

    //   const str = "mihir"
    //   console.log(str);

    //   const num = 234
    //   console.log(num);

    //   const bool = true
    //   console.log(bool);

    //   const empty = null
    //   console.log(empty);

    //   let notdefined;
    //   console.log(notdefined);

    //   const id1 = Symbol('234')
    //   const id2 = Symbol('234')

    //   console.log(id1 == id2);
    
    //   const bigNum = 34985927992398879294392372n
    //   console.log(typeof(bigNum));
    //   console.log(bigNum);




// 2.NON PRIMITIVE OR REFERNECE TYPE ALSO :-
                 
//                    1.ARRAYS
//                    2.OBJECTS
//                    3.FUNCTIONS


//ARRAYS

// const arr = ["maa","pita","behen","bhai"];
// console.log(arr);

// //OBJECTS

// let obj = {
//      name: "mihir",
//      surname: "solanki",
// }

// console.log(obj);
// //FUNCTIONS

// const myFun = function() {

//     console.log("Hello");
    
// }


// console.log(myFun);

//###################################################################################################################################/

// THERE ARE TWO TYPES OF MEMORY IN JAVACRIPT
// 1.STACK USED FOR PRIMITIVE DATA TYPES , IN STACK MEMEORY YOU WILL GET COPY OF THAT VLAUE
// 2.HEAP USED FOR NON-PROIMITIVE TYPES,IN HEAP MEMORY YOU WILL GET REFERNCE ADDRESS

// EXAMPLES

let myname = "mihir"

let nickname = myname

nickname = "mohit"

console.log(myname);
console.log(nickname);


let parmanent_address={
    street: "motipura",
    houseno: 234,
}

let current_address = parmanent_address

current_address.street = "nai avar gali"

console.log(current_address.street);
console.log(parmanent_address.street);
