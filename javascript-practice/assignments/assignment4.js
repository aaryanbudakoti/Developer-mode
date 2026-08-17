// JS Practice questions 

// Q1
let arr = [1,2,3,4,5,6,2,3]; 
let num = 2;

for(let i = 0; i <arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1)
    }

}
console.log(arr)



// Q2
 num = 287152;
// find the number of digits in the number
while (num>1){

}


// Q5
let max = 0
arr = [1,2,3,4,5,23,0,2,131];
for(let i =0; i <arr.length;i++){
    if(max<arr[i]){
        max = arr[i];
    }

}
console.log(max)



