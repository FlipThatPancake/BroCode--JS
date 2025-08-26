

// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 3;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running) {

    guess = Number(window.prompt(`Guess a number between ${minNum} and ${maxNum}:`));

    if (isNaN(guess)) {
        window.alert(`Please enter a valid number.`);
        // continue;
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert(`Please enter a number between ${minNum} and ${maxNum}.`);
        // continue;
    }
    else {
        attempts++;
        if (guess < answer) {
            window.alert(`Your guess is too low. Try again.`);
        } else if (guess > answer) {
            window.alert(`Your guess is too high. Try again.`);
        } else {
            window.alert(`Congratulations! You guessed the number ${answer} in ${attempts} attempts.`);
            running = false;
        }
    }
};