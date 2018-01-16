var imgLoser = document.getElementById('snowInGame');
imgLoser.addEventListener('mouseover', loserModal);
function loserModal() {
    var gameBoard = document.getElementById('Gameboard');
    var gameOver = document.getElementById('gameover');
    var path = document.getElementsByClassName('path');
    var snow = document.getElementsByClassName('snow');
    gameBoard.style.visibility = 'hidden';
    gameOver.style.display = 'flex';
    path.style.animation.play.state = 'paused';
    snow.style.animation.play.state = 'paused';
}

var imgWinner = document.getElementById('winningPicture');
imgWinner.addEventListener('mouseover', winnerModal);
function winnerModal() {
    var gameBoard = document.getElementById('Gameboard');
    var winner = document.getElementById('winner');
    gameBoard.style.visibility = 'hidden';
    winner.style.display = 'flex';
}