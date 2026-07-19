// let goodString = "aar";

// if (goodString[0] === "a" && goodString.length > 3){
//     console.log("It is a Good String");
// }
// else{
//     console.log("It is not a Good String");
// }

// practice q for splice

let months= ['january','july','march','august'];
months.splice(0,2,'july','june');
// console.log(months);
// solution months = ['july','june','march','august']

// practiceq for tic tac toe state representation
 let tictactoe = [  ['x',null,'0'],
                    [null,'x',null],
                    ['0',null,'x']
                ];
                // console.log(tictactoe[0][1]); //null
                tictactoe[0][1]='0';
                // console.log(tictactoe[0][1]); //zero

// LOOPS
// FOR LOOPs
for(let i = 1;i<=5;i++){
    // console.log(i)
}


for(let i =10; i>=1;i--){
    // console.log(i*5);
}

// print all odd numbers from 1 to 15

for(let j = 1 ; j<=15; j = j+2){
    console.log(j);

}

// print all even numbers from 1 to 15

for(let j=0;j<15;j=j+2){
    console.log(j);
}

// nested loop

for( let i = 1; i<=5;i++){
    console.log(`Outer Loop ${i}`)
    for( let j= 1; j<=5;j++){
        console.log(j);
    }
}