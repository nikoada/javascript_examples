var score, roundScore, activePlayer, dice, dice2;


var diceDOM = document.querySelector('#die1');

var diceDOM2 = document.querySelector('#die2');

var tempPlayerScore = document.getElementById('score-0').innerHTML;
console.log(tempPlayerScore);

document.querySelector('.dice').style.display = 'none';


var score0 = document.getElementById('score-0');
var score1 = document.getElementById('score-1');
var winScoreObj = document.getElementById('winScore');
/*
if(input){
    winningScore=input;
}
else{
    winningScore=100;
}
*/

function init() {

    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

}
document.querySelector('.btn-hold').addEventListener('click', hold);
document.querySelector('.btn-new').addEventListener('click', newGame);

document.querySelector('.btn-roll').addEventListener('click', rollDie);

function rollDie() {

    console.log("roll die!");
    dice = Math.floor(Math.random() * 6 + 1);
    dice2 = Math.floor(Math.random() * 6 + 1);

    console.log(dice + " , " + dice2);
    if (dice === prevRoll) {
        if (dice === 6) {
            alert("oops double 6\'s!");
            score[activePlayer] = 0;
        }
    }

    if (dice2 === prevRoll2) {
        if (dice2 === 6) {
            alert("oops double 6\'s!");
            score[activePlayer] = 0;
        }
    }
    console.log('prev roll ' + prevRoll);
    prevRoll = dice;
    prevRoll2 = dice2;
    console.log('current roll ' + dice);
    roll();
}

function newGame() {
    console.log('starting new game...');

    init();
}
var prevRoll = 0;
var prevRoll2 = 0;

function roll() {

    //2. display the result
    console.log('rolling die...');
    diceDOM.style.display = 'block';
    diceDOM2.style.display = 'block';
    //console.log(diceDOM +" , "+ diceDOM2);
    diceDOM.src = './images/dice-' + dice + '.png';
    diceDOM2.src = './images/dice-' + dice2 + '.png';

    //3. update the round score if the rolled number != 1

    prevRoll = dice;


    if (dice !== 1) {
        roundScore += dice + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        alert("you rolled a 1!");
        nextPlayer();
    }
    if (diceDOM.style.display !== 'none') {
        winScoreObj.style.display = 'none';
    }


}



function hold() {
    var winScoreVal = document.getElementById('winScore').value;
    console.log("this game\'s winScore is " + winScoreVal);

    if (activePlayer === 0) {
        score[activePlayer] += roundScore;
        console.log(score[activePlayer]);
        score0.innerHTML = score[activePlayer];
        if (score[activePlayer] >= winScoreVal) {
            document.querySelector('.player-0-panel').classList.add('winner');

            alert("game over player 1 wins");
        }
    } else {
        score[activePlayer] += roundScore;
        console.log(score[activePlayer]);
        score1.innerHTML = score[activePlayer];
        if (score[activePlayer] >= winScoreVal) {
            document.querySelector('.player-1-panel').classList.add('winner');
            alert("game over player 2 wins");
        }
    }
    prevRoll = 0;
    prevRoll2 = 0;
    nextPlayer();

}

function nextPlayer() {


    //now current score will be 0
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    //to show zero value instead of the undefined value
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "1";

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //    diceDOM.style.display='none';

}

score = [0, 0];
roundScore = 0;
activePlayer = 0;
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

//lose score on 2 consecutive 6s
//html winning score input field
//add another dice.





/*

the game is 2 player turn based

In each turn, a player rolls a die as many times as s/he wishes.
each result gets added to his round score.

BUT

if the the player rolls a 1, his round score is lost.
After that it's the next player's turn.

The player can choose to 'hold' which means that his round score is added to his global score.

After that, it's the next player's turn.


The player can choose to 'hold' : which adds his Round score to his Global score.
The First player to reach 100 pts on global score, wins.

learning points:

- how to create our fundamental game variables
- how to generate random number
- how to manipulate the DOM
- how to read from the DOM 
- how to change css styles
*/



//dom access methods always begin with document.

//document.getElementById(id)
//returns an object

//document.getElementsByClassName(tagName)
//returns an array of objecs

//document.querySelector(selector)
//returns an object

//document.querySelectorAll(selector)
//returns an Array


//document.querySelector('#score-0').textContent=dice;
//document.querySelector('#current-0').textContent=dice;
//document.querySelector('#current-' +activePlayer).innerHTML='<em>' + dice + '<em>';

//change the panel activation and show the player indicator
// document.querySelector('player-0-panel').classList.remove('active');
// document.querySelector('player-1-panel').classList.add('active');

//1. Random number display



//hold button click
//roll dice button click
//make init method which describes initialize fro the game 
//make nextPlayer() where you can put logic related to next player