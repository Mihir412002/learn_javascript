"using strict"
//global scope

// let a = 300

// if(true){
//     let a = 1;
//     const b = 2;
//     var c = 3;
//     console.log("INNER: ",a);
// }//block scope

// console.log("OUTER: ",a);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// // console.log(b);

// console.log(c);

//nested scope
//CLOSURE MEANS - CHILD SCOPE CAN ACCEESS VARIABLE OF GLOBAL SCOPE ALSO

// function Caluculation() {
     
//     const ans = 0

//     function multiplication(num1,num2) {
//          const res = num1*num2
     
//         console.log(ans);
//         return res

//     }

//     console.log(res)

//     multiplication(2,5);
    
// }

// Caluculation()


// if (true) {
   
//     const bike = "honda"

//     if (bike === "honda") {

//         const price = 2222

//         console.log(`${bike} price is ${price}`);
        
//     }

//     //console.log(price);//CHILD CAN ACCESS MEMBER OF PARENT BUT PARENT CANT ACCEESS MEMEBER OF CHILD
    
// }

// console.log(price);
//console.log(bike);  not accessible

//*********************************INTRESTING********************************************************** */


console.log(AddOne(4));
function AddOne(num) {

    return num + 1
    
}

//below is also funtion but we are taken as expression to differ from above way of funtion writing 
//so expression can not be called before defination but funtion we can call before defination

console.log(SubOne(4));
const SubOne = function (num) {

    return num - 1;
    
}



