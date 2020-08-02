document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".board div");
  const playerDisplay = document.querySelector("#player");

  squares.forEach((square) => {
    square.addEventListener("click", playerClick);
  });

  let currentPlayer = "playerX";
  let winnerSequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function playerClick(event) {
    const squaresArray = Array.from(squares);
    const index = squaresArray.indexOf(event.target);
    playerDisplay.textContent = currentPlayer;

    //const teste = checkWinner(squares[index].className);

    if (currentPlayer === "playerX") {
      squares[index].classList.add("playerX");
      currentPlayer = "playerO";
    } else {
      squares[index].classList.add("playerO");
      currentPlayer = "playerX";
    }
  }

  function checkWinner(player) {
    for (i in winnerSequences) {
      if (
        squares[winnerSequences[i][0]].className == player &&
        squares[winnerSequences[i][1]].className == player &&
        squares[winnerSequences[i][2]].className == player
      ) {
        console.log(i);
        return i;
      }
    }
    return -1;
  }
});
