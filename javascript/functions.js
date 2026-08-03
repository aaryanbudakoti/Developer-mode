// Function definition
function hello(){
    console.log("Hello")
    console.log("Did you eat today??")

}

// function call
// hello();

function printName(){
    console.log("my Name is Aaryan Budakoti")

}

// printName();

function poem(){
    console.log("Baba black sheep have you any wool?")
    console.log("yes sir, yes sir, three bags full!")

}
// poem();


// dice 1-6
function rollDice(){
    // generates numbers 1 to 6
    console.log(Math.floor(Math.random()*6)+1)
}
// rollDice(); // function calling


// Function with arguments
function add(a,b){
    console.log(a+b);
}

// add(1212,1212); //2424

function printyourName(Name){
    console.log(Name)
}

// printyourName("niggapur");

// Difference between paramter and argument :

// parameter is a variable in the declaration of function

// argument is the actual value of this variable that gets passed to function

// // avg of 3 numbers
// function avg(num1,num2,num3){
//     let av=(num1+num2+num3)/3
//     console.log(av);
// }

// // avg(10,12,15);


// // multiplication table function
// function mulTable(num){
//     for(let i=1; i<=10;i++){
//         console.log(num*i);

//     }
// }
// // mulTable(73);
// // sum of n numbers (1 to n)
// function sumN(number){
//     let sum = 0
//     for(let i =1;i<=number;i++){
//          sum+=i ;
//     }
//     return sum;
// }

// // console.log(sumN(1000));


// // 
// let arr = [ "hi ", "hello ", "what are you doing?"]
// function concat(str){
//     let result = "";
//     for(let i = 0;i<str.length;i++){
//         result+= str[i];
//     }
//     return result;
// }
// // console.log(concat(arr));


// // lexical scope is the accessibility of variables based on their location within the code  
// // inner function can access the variables of outer function but outer function cannot access the variables of inner function
// function outer(){
//     let outerVar = "I am from outer function"
//     function inner(){
//         let innerVar = "I am from inner function"
//         console.log(outerVar);
//         console.log(innerVar);
//     }
//     // inner();
//     // console.log(innerVar); // this will give error because innerVar is not accessible here
// }
// // outer();

// //  function expression

// const sum = function(a,b){
//     return a+b
// }
// console.log(sum(1,2));

// let hi = function (){
//     console.log("Hello")
// }

// hi();


// // Higher order function is a function that takes another function as an argument or returns a function as a result

// function multipleGreet(greet, n){
//     for (let i = 0; i < n; i++) {
//         greet();
//     }

// }
// hi = function(){
//     console.log("namaste")
// }

// // multipleGreet(hi, 5); // this will call the hi function 5 times

// multipleGreet(function(){
//     console.log("Hello")
// }, 3) // this will call the anonymous function 3 times



// // higher order function that returns a function

// function oddeven(num){
//     if(num%2==0){
//         return function(){
//             console.log("Even number")
//         }
//     }
//     else{
//         return function(){
//             console.log("Odd number")
//         }
//     }
// }

// let check = oddeven(5);
// check(); // this will call the inner function that checks if the number is odd or even b 





// // methods - actions can be performed on objects using methods. Methods are functions that are properties of an object.

// const calculator = {
//     add: function(a,b){
//         return a+b;
//     },
//     subtract: function(a,b){
//         return a-b;
//     },
//     multiply: function(a,b){
//         return a*b;
//     },
//     divide: function(a,b){
//         return a/b;
//     }
// }

// console.log(calculator.add(10,5));
// console.log(calculator.subtract(10,5));
// console.log(calculator.multiply(10,5));
// console.log(calculator.divide(10,5));


// // this is possible because internally arrays and strings are objects in javascript and they have methods that can be called on them.

// // method shorthand

// const calculator2 = {
//     add(a,b){
//         return a+b;
//     },
//     subtract(a,b){
//         return a-b;
//     },
//     multiply(a,b){
//         return a*b;   
//     },
//     divide(a,b){
//         return a/b;
//     }
// }



// const student ={
//     name:"aaryan",
//     age: 21,
//     eng: 97,
//     math:91,
//     phy:88,
//     getAvg(){
//         let avg = (this.eng+this.math+this.phy)/3
//         console.log(`${this.name} scored ${avg} in average`)
//         console.log(this)
//     }
// // method can not directly access the variables of the object, so THIS object is used
    
// } 
// student.getAvg();
// console.log(this); //{} 





// // Try and Catch - error handling
// console.log("Hello");
// console.log("Hello");
// // try - allows you to define a block of code to be tested for errors while it is being executed. 
// try {
// console.log(a);
// } catch(e){
//     console.log("caught error - a is not defined")
//     console.log(e) // error will be printed
// }

// // catch - allows you to define a block of code to be executed, if an error occurs in the try block.
// console.log("Hello");
// console.log("Hello");

// // Miscellaneous Topics
// // 1. Arrow Functions - another logic of defining function compactly
// // SYNTAX 
// // const func = (arg1,arg2) => {function definition}

// const sum = (a,b) =>{
//     console.log(a+b)
// }
// sum(11111,11111);

// const cube = (n) => {
//     return n*n*n
// }
// console.log(cube(2));

// const pow = (a,b) =>{
//     return a**b;
// }
// console.log(pow(4,2))

// // implicit return in arrow function - single value returned

// const mul = (a,b)=>(a*b);
// console.log(mul(4,5))



// setTimeout(function, timeout) - window object function (inbuilt function)

// console.log("hi!")
// setTimeout( ()=>{
//     console.log("My house")
// },4000); // 4sec - 4000msec

// console.log("Welcome to ")


// // setInterval(function, interval)
// const id = setInterval(()=>{console.log("aaryan is here")},2000);
// // in every 2 second interval, the same function will be called


// This with arrow functions
