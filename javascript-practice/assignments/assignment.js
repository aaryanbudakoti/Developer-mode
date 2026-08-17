// Q1

// let num = 10
// if (num %10==0){
//     console.log("GOOD");
    
// }
// else{
// console.log("BAD");
// }


// Q2
// let name = prompt("Enter Your Name");
// let age = prompt("Enter your Age");

// alert(`${name} is ${age} years old`)


// Q3 - quarter= 1 ,2 ,3 ,4
// let quarter = 4
// switch (quarter){
//     case 1:
//         console.log("January, February, March");
//         break;
//     case 2:
//         console.log("April, May, June");
//         break;
//     case 3:
//         console.log("July, August, September");
//         break;
//     case 4:
//         console.log("October, November, December");
//         break;
//     default:
//         console.log("Invalid Input");
// }


// Q4

// goldStr= "aaryan";

// if((goldStr[0]==='A' || 'a') && goldStr.length>5){
//     console.log("It is a Golden String")
// }
// else{
//     console.log("it is not a golden string");
    
// }


// Q5 - max of 3 numbers

// a=prompt("enter a")
// b=prompt("enter b")
// c=prompt("enter c")

// if(a>b){
//     if(a>c){
//         console.log(`a is the largest number and its value is ${a}`);

//     }
//     else{
//         console.log(`c is the largest number and its value is ${c}`);
//     }
// }
// else{
//     if(b>c){
//         console.log(`b is the largest number and its value is ${b}`);
//     }
//     else{
//         console.log(`c is the largest number and its value is ${c}`);
//     }
// }



// Q6- write a program to check if 2 numbers have the same last digit

a=prompt("enter a")
b=prompt("enter b")

if(a[-1]===b[-1]){
    console.log(`Yes, ${a} and ${b} have the same last digit `)

}
else{
    console.log("No, they do not have same last digit")
}



