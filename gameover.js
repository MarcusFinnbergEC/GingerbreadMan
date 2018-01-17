var startGameButton = document.getElementById('startGameButton');
startGameButton.addEventListener('click', gameModal);
function gameModal() {
    var startGame = document.getElementById('startGame');
    var gameBoard = document.getElementById('Gameboard');
    startGame.style.display = 'none';
    gameBoard.style.display = 'flex';
    function idleLogout() {
        var t;
        window.onload = resetTimer;
        window.onmousemove = resetTimer;

        function logout() {
            loserModal();
        }

        function resetTimer() {
            clearTimeout(t);
            t = setTimeout(logout, 2000);  // time is in milliseconds
        }
    }
    idleLogout();
}

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