let btns = document.querySelectorAll("button");
console.dir(btns)

// btn.onclick = function(){
//     alert("button was clicked");
// }

function sayHello(){
    alert("Hello")
}
function sayName(){
    alert("My name is Aaryan")
}
// btn.onclick = sayHello; 
// onclick can execute only a single function 


// Event Listener
// element.addEventListener(event,callback fxn)
for (btn of btns){

    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);

}

