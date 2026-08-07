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

// console.log([2,6,4].every((el)=> el%2==0)); //true

// Some method - return true or false (LOGICAL OR)

// console.log([1,2,3,4].some((el)=>el%2==0)); //true


// Reduce method - reduces array into a single value
//  arr.reduce(reducer function with 2 variables for (accumulator,element))

// console.log([1,2,3,4].reduce((res,el)=>(res+el))); //10

// multiples of 10 or not
let nums = [0,20,30,40]

// let answer = nums.every((el)=> el%10==0);
// console.log(answer)

// find minimum number in array
// function getMin(nums){
//    let min = nums.reduce((min,el)=>{
//         if (min < el){
//             return min
//         }else{
//             return el
//         }
        
//     });
//     return min;
// }

// let arr3=[1,24,35,462,2,0]
// console.log(getMin(arr3));
// spread
// let arr4 = [1,2,3,4,6];
// let newArr= [...arr4];
// newArr.push(15);
// console.log(newArr);

// rest
function sum(...args){
    for(let i =0;i<args.length;i++){
        console.log(`you gave us ${args[i]}`);
    }
}
console.log(sum(1,12,4,5,27,7,54,42));