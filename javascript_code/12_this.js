"using strict"

//this keyword is used to reffer current context

// const stu_detail = {
     
//     stu_name : " Mihir Solanki",
//     rollno: 61,

//     collegename: function() {
//         console.log(`${this.stu_name} college name is TIT and rollno is ${this.rollno}`);
//         console.log(this);
        
//     }
// }

// stu_detail.collegename()
// stu_detail.stu_name = "harsh"

// stu_detail.collegename()


// function chai() {

//    console.log(this);
   
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


const chai = () => {
    //const username = "mihir"  //giving undefines means we can use this in funtion only in object we ccan use to reffer
   console.log(this);
   
}


