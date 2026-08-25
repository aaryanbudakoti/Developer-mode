// let btns = document.querySelectorAll("button");
// console.dir(btns)

// // btn.onclick = function(){
// //     alert("button was clicked");
// // }

// function sayHello(){
//     alert("Hello")
// }
// function sayName(){
//     alert("My name is Aaryan")
// }
// // btn.onclick = sayHello; 
// // onclick can execute only a single function 


// // Event Listener
// // element.addEventListener(event,callback fxn)
// for (btn of btns){

//     // btn.addEventListener("click",sayHello);
//     // btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",function (){
//         console.log("you double clicked the button bro!")
//     });

// }

// // There are many other events
// // Animations , mouse Events (auxclick, click, contextmenu etc.)

// let p = document.querySelector("p");

// p.addEventListener("click", function (){
//     console.log("paragraph was clicked");
// })

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function () {
//     console.log("mouse inside box");
// });


// this in event listener
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.dir(this.innerText)
    this.style.backgroundColor = "blue";
    this.style.color = "white";
});