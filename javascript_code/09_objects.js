"using strict"

// //object literals

// //if you accessing symbol without square brakets then you will get another type not symbol type

// const mySym = Symbol("key1")

// console.log(typeof mySym);

// const stu_data = {
//        stu_name: "harsh solanki",
//        "full name": "harsh singh solanki",//now there is a no chance to access this data of objects using dot
//        [mySym]: "keymy1",
//        roll_no: "0111IT201061",
//        enrollment_date: "04/03/2023",
//        attendence_per: "34%",
//        age: 20,
//        native_place: "khargone"

// }

// // console.log(typeof stu_data[mySym]);

// // console.log(stu_data[mySym]);

// //there are two ways to access data of objects like

// // console.log(stu_data.native_place);
// // console.log(stu_data["roll_no"]);

// // console.log(stu_data["full name"]);
// // console.log(stu_data["full name"]);

// //IF YOU WANT TO CHANGE VALUES OF OBJECT EASILY ONLY VIA INSERTING INTO IT AND IF YOU WANT TO FREEZE OBJECT YOU
// // CAN ALSO DO THAT FREEZE MEANS NO ONE CAN CHANGE VALUES OF OBJECT THAN

// // stu_data.stu_name = "Mihir Singh Solanki"

// // console.log(stu_data.stu_name);

// // console.log(stu_data);

// // Object.freeze(stu_data)


// stu_data.branch = function() {

//     console.log(`branch of ${this.stu_name} is Information Technology`);
    
// }

// stu_data.passout_year = function() {

//     console.log(`passout year of ${this.stu_name} is 2024`);
    
// }

// console.log(stu_data.branch());
// console.log(stu_data.passout_year());


//SINGLETONE OBJECT :- 

// const obj1 = new Object()

// console.log(obj1);

// // NON-SINGLETONE OBJECT:-

// const obj2 = {}

// console.log(obj2);


// const employee = {}

// employee.id = 5
// employee.name = "Suresh singh"
// employee.address = "pahasdsinghpur kgn"
// employee.department = "IT"
// employee.expreicse = 3

// console.log(employee);


// const details = {
//     email: "mihi@gmail.com",
//     fullname: {
//         userfullname:{
//              firstname: "Mihir",
//              middlename: "Singh",
//              lastname: "Solanki"
//         }
//     }
// }

// console.log(details);

// // console.log(details.fullname);

// // console.log(details.fullname.userfullname);

// // console.log(details.fullname.userfullname.firstname);

// // console.log(details.fullname.userfullname.middlename);

// // console.log(details.fullname.userfullname.lastname);


// // const con1 = { 1:"a",2:"b"}
// // const con3 = {4:"C",3:"e"}

// // console.log(Object.keys(con1));
// // console.log(Object.values(con1));
// // console.log(Object.entries(con1));


// console.log(con1.hasOwnProperty('1'))
// console.log(con1.hasOwnProperty('3'))
// console.log(con1.hasOwnProperty('b'))
// // const con5 = Object.assign({},con1,con3)

// const con5 = {...con1,...con3}

// console.log(con5);

// const arr = [
//     {
//          name: "mohit",
//          adress: "pahadsinghpura"
//     },

//     {
//         id: 5,
//         enroll: 61

//     },

//     {
//         fees: 2245

//     }
// ]


// console.log(arr[0].name);

// console.log(arr[1].enroll);

// console.log(arr[2].fees);



const course = {

    name:"WebDevelopment",
    fees: 2222,
    duration: 6

}

console.log(course.name);



const {duration,fees,name} = course

console.log(course);

console.log(duration,fees);

//OBJECT JSON FORMAT ME HI HITA HE ALEWAYS [{}],[],{}