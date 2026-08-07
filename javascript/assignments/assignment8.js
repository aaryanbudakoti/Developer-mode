// 1
let nums=[1,2,3,4,5];

const square = nums.map((num)=> num * num);
console.log(square);

let sum = square.reduce((acc,cur)=> acc + cur,0);

let avg = sum / nums.length;
console.log(avg);


// 2
arr = [1,2,3,4,5,6];
let arr2 = arr.map((el)=>{
    return el + 5
})
console.log(arr2);

// 3
let strings = ["adam", "bob","catlyn", "donald"];
console.log(strings.map((string) =>string.toUpperCase()));
