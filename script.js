'use strict';

const playersEl = [document.querySelector('.player--0'), document.querySelector('.player--1')];
const scoresEl = [document.querySelector('#score--0'), document.querySelector('#score--1')];
const currentScoresEl = [document.querySelector('#current--0'), document.querySelector('#current--1')];
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, isGameActive;

const init = function () {
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	isGameActive = true;

	scoresEl[0].textContent = 0;
	scoresEl[1].textContent = 0;
	currentScoresEl[0].textContent = 0;
	currentScoresEl[1].textContent = 0;

	diceEl.classList.add('hidden');
	playersEl[0].classList.remove('player--winner');
	playersEl[1].classList.remove('player--winner');
	playersEl[0].classList.add('player--active');
	playersEl[1].classList.remove('player--active');
};
init();

function switchPlayer() {
	currentScoresEl[activePlayer].textContent = 0;
	currentScore = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	playersEl[0].classList.toggle('player--active');
	playersEl[1].classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
	if (isGameActive) {
		const dice = Math.trunc(Math.random() * 6) + 1;

		diceEl.classList.remove('hidden');
		diceEl.src = `imgs/dice-${dice}.png`;

		if (dice != 1) {
			currentScore += dice;
			currentScoresEl[activePlayer].textContent = currentScore;
		} else {
			switchPlayer();
		}
	}
});

btnHold.addEventListener('click', function () {
	if (isGameActive) {
		scores[activePlayer] += currentScore;
		scoresEl[activePlayer].textContent = scores[activePlayer];

		if (scores[activePlayer] >= 100) {
			isGameActive = false;
			playersEl[activePlayer].classList.add('player--winner');
			playersEl[activePlayer].classList.remove('player--active');
			diceEl.classList.add('hidden');
		} else {
			switchPlayer();
		}
	}
});

btnNew.addEventListener('click', init);
