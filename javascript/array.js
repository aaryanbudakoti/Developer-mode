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

// splice - mmake changes in original array (start,deletecount, replace element)

let colors = ["red","pink","white", "blue"," orange" ]
console.log(colors.splice(3))
console.log(colors)

console.log(colors.splice(0,1))
console.log(colors)

console.log(colors.splice(0,1,"black"))
console.log(colors)


