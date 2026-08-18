// // let smallImages = document.getElementsByClassName("oldImg");

// // for(let i =0;i<smallImages.length ; i++){
// //     smallImages[i].src = "assets/spiderman_img.png"
// //     console.log(`Value of image no. ${i} is changed`);
// // }

// // console.dir(document.querySelector("h1"));
// // console.dir(document.querySelector("#description"));
// // console.dir(document.querySelector(".oldImg"));

// // console.dir(document.querySelector("div a"));

// // console.dir(document.querySelectorAll("div a"));
// // console.dir(document.querySelectorAll(" p "));
// let links = document.querySelectorAll('.box a');

// // for(let i =0 ; i<links.length ; i++){
// //     links[i].style.color = "green";
// // }

// for(link of links){
//     link.style.color = "red";
// }

// let para1 = document.createElement('p');
// para1.innerText = "Hey, I am red" ; 
// document.querySelector('body').append(para1);

// para1.classList.add("red")

// let h3 = document.createElement("h3");
// h3.innerText = "im a blue h3 !";
// document.querySelector("body").append(h3);

// h3.classList.add('blue');


// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText = " I am in a div"
// para2.innerText = "me too!!!"

// div.append(h1);
// div.append(para2);

// div.classList.add("box")

// document.querySelector("body").append(div)


// Assignment 
// 1

let input = document.createElement("input");
let button = document.createElement("button");

button.innerText = "Click me"

document.querySelector("body").append(input);
document.querySelector("body").append(button);

// 2

button.setAttribute("id","btn");
input.setAttribute("placeholder","username");
