function displayTitle() {
    alert('Welcome to the Rock Paper Scissor Game!');
}

function playGame() {
    let number = Math.floor(Math.random() * 10 + 1);
    let computedGuess;

    if(number > 7 ){
        computedGuess = 'r';
    } else if (number > 4) {
        computedGuess = 's';
    } else {
        computedGuess = 'p';
    }
    let guess;
    alert('I\'m guessing rock(r) / paper (p) / scissor(s)');
   
    do{
        
        guess = String(prompt('Enter your guess for rock/paper/scissor choose r /p /s'));
    
    } while((guess !== 'r') && (guess !== 'p') && (guess !== 's') )

    if (guess === computedGuess) {
        alert('It\'s a tie !');
        

    } else if (guess === 'r' && computedGuess === 's' ) {
        alert('You win ! Rock win over Scissor!');

    } else if (guess === 'r' && computedGuess === 'p') {
        alert(`You lost ! Rock is wrapped by Paper `);
        
    } else if (guess === 's' && computedGuess === 'p') {
        alert(`You win ! Your Scissor cuts Paper `);
        
    } else if (guess === 's' && computedGuess === 'r') {
        alert(`You lost ! Your Scissor is broken by Rock! `);
        
    } else if (guess === 'p' && computedGuess === 'r') {
        alert(`You win ! Your Paper covers Rock `);
        
    } else if (guess === 'p' && computedGuess === 's') {
        alert(`You lost ! Your Paper is cut by Scissor! `);
        
    }      
   
}

function main() {
    displayTitle();
    let playAgain = 'y';

    while(playAgain === 'y') {
        playGame();
        playAgain = prompt('Do you want to play again? (y or n)');

    }
    alert('Thanks for playing the game!');

}
main();