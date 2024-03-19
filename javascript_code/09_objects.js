"using strict"

//object literals

//if you accessing symbol without square brakets then you will get another type not symbol type

const mySym = Symbol("key1")

console.log(typeof mySym);

const stu_data = {
       stu_name: "harsh solanki",
       "full name": "harsh singh solanki",//now there is a no chance to access this data of objects using dot
       [mySym]: "keymy1",
       roll_no: "0111IT201061",
       enrollment_date: "04/03/2023",
       attendence_per: "34%",
       age: 20,
       native_place: "khargone"

}

// console.log(typeof stu_data[mySym]);

// console.log(stu_data[mySym]);

//there are two ways to access data of objects like

// console.log(stu_data.native_place);
// console.log(stu_data["roll_no"]);

// console.log(stu_data["full name"]);
// console.log(stu_data["full name"]);

//IF YOU WANT TO CHANGE VALUES OF OBJECT EASILY ONLY VIA INSERTING INTO IT AND IF YOU WANT TO FREEZE OBJECT YOU
// CAN ALSO DO THAT FREEZE MEANS NO ONE CAN CHANGE VALUES OF OBJECT THAN

// stu_data.stu_name = "Mihir Singh Solanki"

// console.log(stu_data.stu_name);

// console.log(stu_data);

// Object.freeze(stu_data)


stu_data.branch = function() {

    console.log(`branch of ${this.stu_name} is Information Technology`);
    
}

stu_data.passout_year = function() {

    console.log(`passout year of ${this.stu_name} is 2024`);
    
}

console.log(stu_data.branch());
console.log(stu_data.passout_year());