// DICE ROLLER PROGRAM

function rollDice() {
    const numOfDice = document.getElementById("num-dice").value;
    const diceResult = document.getElementById("dice-result");
    const diceImages = document.getElementById("dice-images");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice-${value}.svg" alt="Dice ${value}" class="dice-image">`)
    }

    diceResult.textContent = `You rolled: ${values.join(', ')}`;
    diceImages.innerHTML = images.join(' ');
};

document.getElementById("roll-button").addEventListener("click", rollDice);


// function rollDice() {
//     const diceInput = document.getElementById("num-dice").value;
//     const resultDisplay = document.getElementById("dice-result");
    
//     // Validate input
//     if (!/^\d*d\d+$/.test(diceInput)) {
//         resultDisplay.textContent = "Invalid input format. Use format like '2d6' or '1d20'.";
//         return;
//     }

//     const [numDice, dieType] = diceInput.split('d').map(Number);
//     let total = 0;
//     let rolls = [];

//     for (let i = 0; i < numDice; i++) {
//         const roll = Math.floor(Math.random() * dieType) + 1;
//         rolls.push(roll);
//         total += roll;
//     }

//     resultDisplay.textContent = `Rolls: ${rolls.join(', ')} | Total: ${total}`;
// }