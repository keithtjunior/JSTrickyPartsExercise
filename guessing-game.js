function guessingGame() {
    let num = Math.floor(Math.random() * 100);
    let gameOver = false;
    let guesses = 0;
    return function (guess) {
        if(!gameOver) {
            guesses++;
            if(guess === num){
                gameOver = true;
                return `You win! You found ${num} in ${guesses} guess${guesses === 1 ? '' : 'es'}.`;
            }else if (guess > num){
                return `${guess} is too high!`;
            }else if (guess < num){
                return `${guess} is too low!`;
            }
        }
        return 'The game is over, you already won!'
    } 
}

module.exports = { guessingGame };
