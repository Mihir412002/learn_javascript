"using strict"

// function programmingLanguages(str) {
//     return str
    
// }

// console.log(programmingLanguages("c++"));

// function programmingLanguages(...str) {
//     return str
    
// }

// console.log(programmingLanguages("c++","java","python"));


// function programmingLanguages(str1,str2,...str) {
//     return str
    
// }

// console.log(programmingLanguages("c++","java","python","javascript"));



// const student = {
//     name: "Mihir",
//     rollno: "0111IT201061"
// }


// function stu_details(obj) {
//     console.log(`${obj.name} has enrollemenet number ${obj.rollno}`);
// }

// stu_details(student)


//creating array and inserting into function

const arr = [1,2,34,5,67,8,8,9]

function fetchValueFromArray(val) {

    return val[4]
    
}

console.log(fetchValueFromArray(arr));