const random = Math.floor(Math.random() * 20);
// console.log(random);

let score = 10;

const userInput = document.querySelector(".guess");
const check = document.querySelector("#check");
const message = document.querySelector(".message");
const main = document.querySelector("main");
const scoreSection = document.querySelector(".score");

const ls = document.querySelector(".label-score");
const ls1 = document.querySelector(".label-highscore");

const win_message = "Wow! You guessed right! , Congrats!!!!";
const high_message = "Your guess is too high!!!";
const low_message = "Your guess is too low!!!";
const outofrange = "Please enter a number between 0 and 20 !!!";

const checkFunction = () => {
  const userGuess = Number(userInput.value);
  
  if(userGuess == ""){
    message.textContent = outofrange;
  }else if (userGuess >= 20 || userGuess <= -1) {
    message.textContent = outofrange;

  }else{
    if (userGuess == random) {

      message.textContent = win_message;
      main.style.backgroundColor = "gold";

      message.style.color = "black";
      ls.style.color = "black";
      ls1.style.color = "black";
      

    } else if (userGuess > random){

      message.textContent = high_message;
      main.style.backgroundColor = "blue";
      score--;

    }else if (userGuess < random ){

      message.textContent = low_message;
      main.style.backgroundColor = "green";
      score--;
    }
  }
  scoreSection.textContent = score;
  
};

check.addEventListener("click",checkFunction);
