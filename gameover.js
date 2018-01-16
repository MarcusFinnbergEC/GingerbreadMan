var imgLoser = document.getElementById('snowInGame');
imgLoser.addEventListener('mouseover', loserModal);
function loserModal() {
    var gameBoard = document.getElementById('Gameboard');
    var gameOver = document.getElementById('gameover');
    gameBoard.style.visibility = 'hidden';
    gameOver.style.display = 'flex';
}

var imgWinner = document.getElementById('winningPicture');
imgWinner.addEventListener('mouseover', winnerModal);
function winnerModal() {
    var gameBoard = document.getElementById('Gameboard');
    var winner = document.getElementById('winner');
    gameBoard.style.visibility = 'hidden';
    winner.style.display = 'flex';
}