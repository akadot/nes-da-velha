document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".board div");
  const playerDisplay = document.querySelector("#player");
  const result = document.querySelector("#result");
  const start = document.querySelector("#btn");

  let currentPlayer = "cross";

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

  let gameOver = false;

  start.addEventListener("click", () => {
    squares.forEach((item) => {
      item.textContent = "";
    });
    result.textContent = "";
    playerDisplay.textContent = "";
    gameOver = false;
  });

  squares.forEach((square) => {
    square.addEventListener("click", playerClick);
  });

  function playerClick(event) {
    if (gameOver == false) {
      const squaresArray = Array.from(squares);
      const index = squaresArray.indexOf(event.target);

      if (currentPlayer === "cross" && squaresArray[index].textContent == "") {
        squaresArray[index].style.color = "#50fa7b";
        squaresArray[index].textContent = "X";

        playerDisplay.style.color = "#50fa7b";
        playerDisplay.textContent = "X";

        currentPlayer = "circle";
      }
      if (currentPlayer === "circle" && squaresArray[index].textContent == "") {
        squaresArray[index].style.color = "#ff5555";
        squaresArray[index].textContent = "O";

        playerDisplay.style.color = "#ff5555";
        playerDisplay.textContent = "O";

        currentPlayer = "cross";
      }

      const pickWinner = checkWinner(squaresArray[index].textContent);

      if (pickWinner === true) {
        result.style.color = playerDisplay.style.color;
        result.textContent = squaresArray[index].textContent;
        gameOver = true;
      }
    } else {
      return;
    }
  }

  function checkWinner(player) {
    for (i in winnerSequences) {
      if (
        squares[winnerSequences[i][0]].textContent == player &&
        squares[winnerSequences[i][1]].textContent == player &&
        squares[winnerSequences[i][2]].textContent == player
      ) {
        return true;
      }
    }
  }
});
