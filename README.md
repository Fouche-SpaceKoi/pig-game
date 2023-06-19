# Dice Game in JavaScript

This code implements a simple dice game in pure JavaScript made in the course [The Complete JavaScript Course: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course/). The goal of the game is to be the first player to reach a score of 100 or more.

## Code Structure

### DOM Element Selectors

Selectors are used to select the DOM elements that will be modified during the game. Selectors include elements for the players, the scores, the dice, and the buttons.

```javascript
const playersEl = [document.querySelector('.player--0'), document.querySelector('.player--1')];
const scoresEl = [document.querySelector('#score--0'), document.querySelector('#score--1')];
const currentScoresEl = [document.querySelector('#current--0'), document.querySelector('#current--1')];
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
```

### Game Variables

These variables are used to maintain the current state of the game. `scores` is an array that keeps track of the total scores of each player, `currentScore` is the current turn's score of the player, `activePlayer` indicates which player is playing (0 or 1), and `isGameActive` is a boolean that indicates whether the game is in progress or not.

```javascript
let scores, currentScore, activePlayer, isGameActive;
```

### Initialization Function

This function is called at the start of the game and whenever a new game is wanted to start. It resets all game variables and updates the DOM to reflect the initial state of the game.

```javascript
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    isGameActive = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init();
```

### Function to Switch Players

This function is called whenever a player rolls a 1 or decides to hold their score. It resets the current score, switches the active player, and updates the DOM to reflect the player switch.

```javascript
function switchPlayer() {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
```

### Button Events

These are the event handlers for the three game buttons: the button to roll the dice, the button to hold the score, and the button to start a new game. Each time a button is pressed, the corresponding function is executed.

The dice roll event:

```javascript
btnRoll.addEventListener('click', function () {
    if (isGameActive) {
        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display the dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3. Check for rolled 1
        if (dice != 1) {
            // Add dice to current score
            currentScore += dice;


            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});
```

The score hold event:

```javascript
btnHold.addEventListener('click', function () {
    if (isGameActive) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
            // Finish the game
            isGameActive = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});
```

The new game event:

```javascript
btnNew.addEventListener('click', init);
```
