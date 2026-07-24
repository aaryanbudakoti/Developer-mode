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

// avg of 3 numbers
function avg(num1,num2,num3){
    let av=(num1+num2+num3)/3
    console.log(av);
}

// avg(10,12,15);


// multiplication table function
function mulTable(num){
    for(let i=1; i<=10;i++){
        console.log(num*i);

    }
}
// mulTable(73);
// sum of n numbers (1 to n)
function sumN(number){
    let sum = 0
    for(let i =1;i<=number;i++){
         sum+=i ;
    }
    return sum;
}

// console.log(sumN(1000));


// 
let arr = [ "hi ", "hello ", "what are you doing?"]
function concat(str){
    let result = "";
    for(let i = 0;i<str.length;i++){
        result+= str[i];
    }
    return result;
}
console.log(concat(arr))

