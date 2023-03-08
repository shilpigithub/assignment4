

function  playGame() {
    let userChoice
    let compChoice
    let randNum

    //USER CHOICE
    while (true) {
        userChoice = prompt('Choose either rock, paper, or scissors.').toLowerCase();
        if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
            alert('Enter a valid value -rock/ paper/ scissors)');
        } else {
            break;
        }
    }

    // COMPUTER CHOICE
    randNum = Math.random();
    if (randNum <= .33) {
        compChoice = 'rock';
    } else if (randNum <= .66) {
        compChoice = 'paper';
    } else {
        compChoice = 'scissors';
    }

    if (userChoice === 'rock' && compChoice === 'paper')
        alert(`Computer wins ! Computer choice ${compChoice} covers ${userChoice}`)
    else if (userChoice === 'rock' && compChoice === 'scissor')
        alert(`You win! ${userChoice} destroys {compChoice}`)
    else if (userChoice === 'scissors' && compChoice === 'paper' )
        alert(`You Win! ${userChoice} cuts Computer choice${compChoice}`)
    else if (userChoice === 'scissors' && compChoice === 'rock')
        alert(`Computer Wins! Computer choice ${compChoice} destroys ${userChoice}`)    
    else if (userChoice == 'paper' && compChoice == 'scissor')
        alert(`Computer Wins! Computer choice ${compChoice} cuts ${userChoice}`)
    else if (userChoice == 'paper' && compChoice == 'rock')
        alert(`You Win! ${userChoice} covers Computer choice ${compChoice}`)
    else
        alert (`It's a tie. User choices and Computer choices are same!`)


}


function game() {
    alert('Welcome to the Rock, Paper, Scissors Game!');
    let playAgain = 'y';
    while (playAgain === 'y') {
        playGame();
        playAgain = prompt('Do you want to play again? (y/n)', 'y');
    }
    alert('Thank you for playing the game.');
}
game();