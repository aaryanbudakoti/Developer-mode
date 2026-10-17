let gameSeq = []
let userSeq = []

let btns = [ "red" , "blue" , "yellow","purple"] ;
let started = false;
let level = 0 ;

let h2 = document.querySelector("h2")
document.addEventListener("keypress",function(){
   if(started == false){ 
    console.log("Game Started");
    started = true;


    levelUp();
}

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(  `.${randColor}`)
    console.log(randbtn)
    btnFlash(randbtn);
}

function btnPress(){
    let btn = this ;
    btnFlash(btn);
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let three = two() + one();
// }

// three();
//  // Call stack and Function call Example


// js is single threaded, but browser is able to handle more than one line of code at the same time because of the event loop and callback queue.

// async code is code that is executed after a certain event occurs, like a click or a timer. It allows the browser to continue executing other code while waiting for the event to occur.

// callback function is a function that is passed as an argument to another function and is executed after the first function has completed. It allows for asynchronous code execution and helps to avoid blocking the main thread.