// higher order array functions 

// ** for each **

// let arr = [1,2,3,4,5]

// let print = function(el){
//     console.log(el)
// }

// arr.forEach(print);

// arr.forEach(function (el){
//     console.log(el)
// })


// arr.forEach ((el)=> {
//     console.log(el);
// })


// 

// arr.forEach((student)=>{
//     console.log(student.marks);
// })

// map function 

// let num = [1,2,3,4]

// let double = num.map((el)=>{
//     return el*2
// })
// console.log(double)

// let square = num.map((el)=>{
//     return el*el
// })
// console.log(square)



// filter function 

// let nums = [1,2,3,4,5,6,7,8]
// let even = nums.filter((el)=> (el %2==0));
// console.log(even);

// Every method- return true or false  (LOGICAL AND)

console.log([2,6,4].every((el)=> el%2==0)); //true

// Some method - return true or false (LOGICAL OR)

console.log([1,2,3,4].some((el)=>el%2==0)); //true


// Reduce method - reduces array into a single value
//  arr.reduce(reducer function with 2 variables for (accumulator,element))

console.log([1,2,3,4].reduce((res,el)=>(res+el))); //10
