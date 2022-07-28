const rock = document.querySelector(".rockBtn")
const paper = document.querySelector(".paperBtn")
const scissors = document.querySelector(".scissorsBtn")

const rules = document.querySelector(".rulesDiv")
const rulesBtn = document.querySelector('.rules')
const rulesWrapper = document.querySelector(".rulesWrapper")
const rulesCloseBtn = document.querySelector(".rulesCloseBtn")
const scoreElement = document.querySelector(".scoreNum")

let points

if(sessionStorage.score == undefined){
    sessionStorage.setItem('score', 0)
    scoreElement.innerText = sessionStorage.score
}
else {
    scoreElement.innerText = sessionStorage.score
}

const choices = Array(document.querySelectorAll('.choiceBtn'))[0]
let playerChoice, compChoice


choices.forEach(choice => choice.addEventListener("click", (e) => {
    e.target === rock ? playerChoice = "rock" : e.target === paper ? playerChoice = "paper" : playerChoice = "scissors"

    sessionStorage.setItem("player", playerChoice)

    getComputerChoice()

    calcWinner(playerChoice, compChoice)
}) )

function updateScore (){
    scoreElement.innerText = sessionStorage.score
}

function getComputerChoice () {
    let num = Math.floor(Math.random() * 3)
    compChoice = choices[num]
    
    
    compChoice === rock ? compChoice = "rock" : compChoice === paper ? compChoice = "paper" : compChoice = "scissors"

    sessionStorage.setItem('house', compChoice)
}

function calcWinner (pChoice, cChoice){
    if(pChoice === cChoice) console.log("Tie!!", pChoice, cChoice)
    else if ((pChoice == "rock" && cChoice == "scissors") ||
        (pChoice == "paper" && cChoice == 'rock') ||
        (pChoice == "scissors" && cChoice == "paper")
    ) {
        sessionStorage.score = Number(sessionStorage.score) + 1
        updateScore()
    }
    else {
        console.log("Computer Wins!", pChoice, cChoice)
    }

}


//////

// Event listeners for toggling the rules

//////
rulesBtn.addEventListener("click", () =>{
    rulesWrapper.toggleAttribute("hidden")
    window.requestAnimationFrame(animateRules)    
})

rulesCloseBtn.addEventListener('click', () =>{
    rulesWrapper.toggleAttribute("hidden")
    rules.style.top = "-500px"
})




//////////////

//  Logic and variables for animation of ruleset HTML element

/////////////

let start, previousTimeStamp;
let done = false

function animateRules(timestamp) {
if (start === undefined) {
    start = timestamp;
      }

    const elapsed = timestamp - start;
  
    if (previousTimeStamp !== timestamp) {
      // Math.min() is used here to make sure the element stops at exactly 200px
      const count = Math.min(1.5 * elapsed, 750);
      rules.style.top = `calc(${count}px - 500px)`;
      if (count === 750) done = true;
    }
  
    if (elapsed < 2000) { // Stop the animation after 2 seconds
      previousTimeStamp = timestamp;
      if (!done) {
        window.requestAnimationFrame(animateRules);
      }
    }
    console.log(done)
    if(done){
        start = undefined
        timestamp = 0
        done = false
    }
  }


