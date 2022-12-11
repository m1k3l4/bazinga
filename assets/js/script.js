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
function leonardChoice() {
    let randomValue = Math.floor(Math.random() * 5) + 1;

    if (randomValue === 1) {
        leonard = 'rock';
    } else if (randomValue === 2) {
        leonard = 'paper';
    } else if (randomValue === 3) {
        leonard = 'scissors';
    } else if (randomValue === 4) {
        leonard = 'lizard';
    } else {
        leonard = 'spock';
    }
    displayLeonardChoice.innerHTML = leonard;
}

leonardChoice();


//function to evaluate and generate result
function resultEvaluation() {

}

//function to increment score value
function scoreValue() {

}

//main code to get player choice and invoke functions
