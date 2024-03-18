
let mytime = new Date(2023,1,5,12,30);
console.log(mytime);
console.log(mytime.getDate());
console.log(mytime.getDay());

console.log(mytime.toDateString());
console.log(mytime.toString());
console.log(mytime.toLocaleString());

let myday = new Date("2023-04-3");
console.log(myday);
console.log(myday.getDate());
console.log(myday.getDay());

console.log(myday.toDateString());
console.log(myday.toString());
console.log(myday.toLocaleString());


let mystamp = Date.now();

console.log(mystamp);

let mydateandtime = new Date(4,2,2022)

mydateandtime.toLocaleString('default',{
    weekday: "long",
   
})