//global variables and constants
const allOptions = document.querySelectorAll("button");
const displaySheldonChoice = document.getElementById('player_sheldon');
const displayLeonardChoice = document.getElementById('player_leonard');
const sheldonScore = document.getElementById('sheldon_score');
const leonardScore = document.getElementById('leonard_score');
const displayResult = document.getElementById('outcome');
let globalSheldonScore = 0;
let globalLeonardScore = 0;
let gameResult;
let sheldon;
let leonard;

//function for opponent random choice
function sheldonChoice() {
    let randomValue = Math.floor(Math.random() * 5) + 1;

    if (randomValue === 1) {
        sheldon = 'rock';
    } else if (randomValue === 2) {
        sheldon = 'paper';
    } else if (randomValue === 3) {
        sheldon = 'scissors';
    } else if (randomValue === 4) {
        sheldon = 'lizard';
    } else {
        sheldon = 'spock';
    }
    displaySheldonChoice.innerHTML = sheldon;
}

//test - to be removed
sheldonChoice();


//function to evaluate and generate result
function resultEvaluation() {

    if (leonard === 'rock' && sheldon === 'paper') {
        gameResult = 'Bazinga! You lose!';
    } else if (leonard === 'rock' && sheldon === 'scissors') {
        gameResult = 'You win!';
    } else if (leonard === 'rock' && sheldon === 'lizard') {
        gameResult = 'You win!';
    } else if (leonard === 'rock' && sheldon === 'spock') {
        gameResult = 'Bazinga! You lose!';
    } else if (leonard === 'paper' && sheldon === 'rock') {
        gameResult = 'You win!';
    } else if (leonard === 'paper' && sheldon === 'scissors') {
        gameResult = 'Bazinga! You lose!';
    } else if (leonard === 'paper' && sheldon === 'lizard') {
        gameResult = 'Bazinga! You lose!';
    } else if (leonard === 'paper' && sheldon === 'spock') {
        gameResult = 'You win!';
    } else if (leonard === 'scissors' && sheldon === 'rock') {
        gameResult = 'Bazinga! You lose!';
    } else if (leonard === 'scissors' && sheldon === 'paper') {
        gameResult = 'You win!';
    } else if (leonard === 'scissors' && sheldon === 'lizard') {
        gameResult = 'You win!';
    } else if (leonard === 'scissors' && sheldon === 'spock') {
        gameResult = 'Bazinga! You lose!';
    } else if (leonard === 'lizard' && sheldon === 'rock') {
        gameResult = 'Bazinga! You lose!';
    } else if (leonard === 'lizard' && sheldon === 'paper') {
        gameResult = 'You win!';
    } else if (leonard === 'lizard' && sheldon === 'scissors') {
        gameResult = 'Bazinga! You lose!';
    } else if (leonard === 'lizard' && sheldon === 'spock') {
        gameResult = 'You win!';
    } else if (leonard === 'spock' && sheldon === 'rock') {
        gameResult = 'You win!';
    } else if (leonard === 'spock' && sheldon === 'paper') {
        gameResult = 'Bazinga! You lose!';
    } else if (leonard === 'spock' && sheldon === 'scissors') {
        gameResult = 'You win!';
    } else if (leonard === 'spock' && sheldon === 'lizard') {
        gameResult = 'Bazinga! You lose!';
    } else {
        gameResult = 'Draw!';
    }

    displayResult.innerHTML = gameResult;
}

//function to increment score value
function scoreValue() {

}

//main code to get player choice and invoke functions
