const favMovie = "avengers";

let guess = prompt("Guess my Favourite Movie ");

while((guess.toLowerCase != favMovie.toLowerCase ) && (guess == "quit")){
    guess = prompt("wrong guess, try again");

}

if(guess == favMovie ){
console.log("Your guess is correct ! ")
}
else if(guess== "quit"){
    console.log("You quit")
}