// arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers

let arr=[1,1,1,1,1,1,1]

let arrayAverage= (arr)=>{
    let avg=0
    for(let i =0;i<arr.length;i++){
        avg+=arr[i]

    }
    console.log(avg/arr.length);
}
arrayAverage(arr);


//  arrow function named isEven() that takes a single number as argument and return if its even or not

let num = 12;

let isEven = (num)=>{
    if(num%2===0){
        return true
    }
    else{
        return false
    }
}

console.log(isEven(121241532453261))