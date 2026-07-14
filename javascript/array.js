cars=["Maruti","Ferrari","Aston Martin","Lamborghini"]
// array methods - push,pop,shift,unshift
// Practice Question
arr=['january','july','march','august'];
arr.shift();
arr.shift();
arr.unshift('june');
arr.unshift('july');
// console.log(arr);
// solution arr = ['july','june','march','august']


// indexOf and include method
cars.indexOf('Maruti');
cars.indexOf("Ferrari");
console.log(cars.includes('Audi'));  // false


// concat , reverse

let primary = [ "red","yellow","blue"]
let secondary = ["orange","green","violet"]
// console.log(primary.concat(secondary));
// console.log(primary)
let allColors = primary.concat(secondary)
// console.log(allColors)


// console.log(primary.reverse())

// splice - make changes in original array (starting index,deletecount, replace element)

let colors = ["red","pink","white", "blue"," orange" ]
// console.log(colors.splice(3))
// console.log(colors)

// console.log(colors.splice(0,1))
// console.log(colors)

// console.log(colors.splice(0,1,"black"))
// console.log(colors)

// sort method - sort the array in ascending order
let marks = [ 90, 80, 70, 60, 50, 40, 30, 20, 10]
// console.log(marks.sort())
let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(numbers.sort())
// sorting of numbers in ascending order is not working properly because sort method converts the numbers into string and then sorts them. So, we need to use compare function to sort the numbers in ascending order.
let chars = ["a","c","b","e","d"]
// console.log(chars.sort())
// mostly used for string

// array references - address in memory
let arr1 = [1,2,3,4,5]
let arr2 = arr1
arr2.push(6)
// arr1 and arr2 are pointing to the same address in memory. So, when we push an element in arr2, it also gets pushed in arr1. This is called array reference. If we want to create a new array with the same elements as arr1, we can use the slice method or spread operator.
// console.log(arr1)  // [1,2,3,4,5,6]
// console.log(arr2)  // [1,2,3,4,5,6]

console.log([1] === [1])  //false
let a = [1]
let b = [1]
console.log(a === b)  // false
// why False? because a and b are pointing to different addresses in memory. So, even though they have the same elements, they are not equal. If we want to compare the elements of two arrays, we can use the every method or the JSON.stringify method.


// constant arrays
const arr = [1,2,3,4,5]
arr.push(6)
console.log(arr)  // [1,2,3,4,5,6]
// we can push an element in a constant array because we are not changing the address of the array. We are only changing the elements of the array. But if we try to reassign the array to a new array, it will give an error.
// arr = [1,2,3]  // TypeError: Assignment to constant variable.
// we can perform certain operations on constant arrays like push, pop, shift, unshift, splice, sort, reverse, etc. But we cannot reassign the array to a new array i.e. change its memory location. We can also change the elements of the array using index. For example, arr[0] = 10 will change the first element of the array to 10. But we cannot reassign the array to a new array i.e. change its memory location.


// nested arrays
let nestedArr = [[1,2,3],[4,5,6],[7,8,9]] // 2D array of size 3x3
console.log(nestedArr[0][0])  // 1
console.log(nestedArr[1][1])  // 5
console.log(nestedArr[2][2])  // 9