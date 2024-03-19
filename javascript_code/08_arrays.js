"using strict"

// const arr = [1,2,3,4,56,5]

// const arr_arr = new Array(2,4,5,66,5)

// const arr3 = ["safe","secure","great"]

// console.log(arr3);

// // console.log(arr[3]);
// // console.log(arr_arr[3]);
// // console.log(arr3[1]);

// arr3.push("mitigate")

// // console.log(arr3[3]);

// arr3.pop()

// arr3.pop()

// // console.log(arr3[0]);
// // console.log(arr3[1]);

// arr3.unshift("good")

// // console.log(arr3[0]);

// arr3.unshift("nice")
// arr3.shift()

// // console.log(arr3[0]);
// // console.log(arr3[2]);

// // console.log(arr3);

// // console.log(arr3.includes("nice"));

// // console.log(arr3.indexOf("safe"));

// const again_arr = arr3.join()

// console.log(again_arr);
// console.log(typeof(again_arr));

// //slice :- this operation is used to fetch elements from array between range
// //splice :- this operation is used to fetch or delete or manipulates or moodisies original array between range 

const conjuction = Array("for","and","not","but","or","yet","so")

// const imp = conjuction.slice(1,4)

// console.log(conjuction);
// console.log(imp);

const numbers = Array("natural","whole","integers","even","odd","prime")

// const impn = numbers.splice(1,4)
// console.log(numbers);
// console.log(impn);

// conjuction.push(numbers)

// console.log(conjuction);

// console.log(conjuction[7][2]);

// const narr = conjuction.concat(numbers)//concat combines two array or merger it and stores it into new array or new storage means returns new array

// console.log(conjuction);

// console.log(numbers);

// console.log(narr);


// console.log(narr[9]);

//SPREAD OPERATOR (...) SPREAD ALL ELEMENTS OF ARRAY SEPARATELY THEN [...ARRR1,...ARR2] IN THUS WAY WE CAN COMBINE OR MERGE RTWO ARRAYS


// const new_arr = [...conjuction,...numbers]

// console.log(new_arr);



//FLAT :- IT IS USE TO RETURNS A NEW ARRAY WITH ALL SUB-ARRAY ELEMENTS CONCATENETED INTO IT RECURSIVELY UP TO THE SPECIFIED DEPTH

// const num = [1,2,3,4,4,[3,5,54,[33,4,5,87,5]],[5,8,0,2,6,6,3,5,[34,65,8]]]

// const new_num = num.flat(3)

// console.log(new_num);

// new_num.sort()

// console.log(new_num);



//isArray() -  TO CHECK GIVEN IS ARRAY OR NOT LIKE

// console.log(Array.isArray("Hitesh"));

// //from()- make array from given data 

// console.log(Array.from("Mihir"));

//of() - returns elements froma aset of arrays

const s1 = 90
const s2 = 58
const s3 = 60


console.log(Array.of(s1,s2,s3));