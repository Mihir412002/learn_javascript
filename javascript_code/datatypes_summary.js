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

      const str = "mihir"
      console.log(str);

      const num = 234
      console.log(num);

      const bool = true
      console.log(bool);

      const empty = null
      console.log(empty);

      let notdefined;
      console.log(notdefined);

      const id1 = Symbol('234')
      const id2 = Symbol('234')

      console.log(id1 == id2);
    
      const bigNum = 34985927992398879294392372n
      console.log(typeof(bigNum));
      console.log(bigNum);




// 2.NON PRIMITIVE OR REFERNECE TYPE ALSO :-
                 
//                    1.ARRAYS
//                    2.OBJECTS
//                    3.FUNCTIONS


//ARRAYS

const arr = ["maa","pita","behen","bhai"];
console.log(arr);

//OBJECTS

let obj = {
     name: "mihir",
     surname: "solanki",
}

console.log(obj);
//FUNCTIONS

const myFun = function() {

    console.log("Hello");
    
}


console.log(myFun);
