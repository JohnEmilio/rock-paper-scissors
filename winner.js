 const playerImg = document.querySelector(".playerChoiceImg")
 const playerWrapper = document.querySelector('.playerChoiceWrapper')
 const player = document.querySelector('.playerChoice')

 const botImg = document.querySelector('.botChoiceImg')
 const botWrapper = document.querySelector('.botChoiceWrapper')
 const bot = document.querySelector('.botChoice')

 const winLoseHeader = document.querySelector('.winLoseHeader')
 const winLoseBtn = document.querySelector('.winLoseBtn')

 const pChoice = sessionStorage.player
 const hChoice = sessionStorage.house
 
 ////////

  // Function for changing winning condition screen

  ///////
  setWinScreen()

  function setWinScreen () {

    console.log(pChoice, hChoice)

    if (pChoice == 'rock') {
      playerImg.src = './images/icon-rock.svg'
      playerWrapper.classList.add('rockWrapper')
      player.classList.add('rock')
    }
    else if (pChoice == 'paper') {
      playerImg.src = './images/icon-paper.svg'
      playerWrapper.classList.add('paperWrapper')
      player.classList.add('paper')
    }
    else {
      playerImg.src = './images/icon-scissors.svg'
      playerWrapper.classList.add('scissorsWrapper')
      player.classList.add('scissors')

    }

    if (hChoice == 'rock') {
      botImg.src = './images/icon-rock.svg'
      botWrapper.classList.add('rockWrapper')
      bot.classList.add('rock')
    }
    else if(hChoice == 'paper') {
      botImg.src = './images/icon-paper.svg'
      botWrapper.classList.add('paperWrapper')
      bot.classList.add('paper')
    }
    else {
      botImg.src = './images/icon-scissors.svg'
      botWrapper.classList.add('scissorsWrapper')
      bot.classList.add('scissors')
    }
    calcWinner(pChoice, hChoice)
    // updateScore()

  }

  function calcWinner (pChoice, cChoice){
    if(pChoice === cChoice) {
      console.log("Tie!!", pChoice, cChoice)
      winLoseHeader.innerText = "Tie!"
    }
    else if ((pChoice == "rock" && cChoice == "scissors") ||
        (pChoice == "paper" && cChoice == 'rock') ||
        (pChoice == "scissors" && cChoice == "paper")
    ) {
      winLoseHeader.innerText = "You Win!"
        console.log("Player Wins!", pChoice, cChoice)
        // updateScore()
    }
    else {
        winLoseHeader.innerText = "You Lose!"
        console.log("Computer Wins!", pChoice, cChoice)
    }
}
// function updateScore (){
//     let points = Number(sessionStorage.score)
//     points++
//     document.querySelector(".scoreNum").innerText = points
// }