# Juego de Dados en JavaScript

Este es un simple juego de dados implementado en JavaScript puro realizado en el curso [The Complete JavaScript Course 2023: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course/).

## Estructura del Código

El código está estructurado de la siguiente manera:

```javascript
'use strict';

// Selectores de los elementos del DOM.
const playersEl = [document.querySelector('.player--0'), document.querySelector('.player--1')];
const scoresEl = [document.querySelector('#score--0'), document.querySelector('#score--1')];
const currentScoresEl = [document.querySelector('#current--0'), document.querySelector('#current--1')];
...

// Variables del juego.
let scores, currentScore, activePlayer, isGameActive;

// Función de inicialización.
const init = function () {
...
};

// Función para cambiar de jugador.
function switchPlayer() {
...
}

// Evento para el botón de lanzar los dados.
btnRoll.addEventListener('click', function () {
...
});

// Evento para el botón de guardar la puntuación.
btnHold.addEventListener('click', function () {
...
});

// Evento para el botón de nuevo juego.
btnNew.addEventListener('click', init);
```
