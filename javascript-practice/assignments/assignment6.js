// Q1
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let num=5;
// function largernum(num,arr){
//     for(let i=0;i<arr.length;i++){
//         if (arr[i]>num){
//         console.log(arr[i]);
//         }
//     }
// }

// largernum(num,arr);


// Q2 - print unique characters in a string

// let str = "asasadaefgfasdsfdgkutyj"

// function getUnique(str){
//     ans=""
//     for(let i=0;i<str.length;i++){
//         let currChar = str[i]
//         if(ans.indexOf(currChar)==-1){
//             ans+=currChar
//         }
//     }
//     return ans
// }

// let a = getUnique(str);
// console.log(a)


// Q3

// let country = ["India","United States", " Russia", " Argentina"]

// function getLongestName(country){
//     let ansIdx=0
//     for(let i = 0;i<country.length;i++){
//        let  ansLen=country[ansIdx].length;
//        let  currLen=country[i].length;
//         if(currLen>ansLen){
//             ansIdx=i;
//         }
//     }
//     return country[ansIdx];
// }

// let answer=getLongestName(country);
// console.log(answer)

