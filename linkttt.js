
// Define player turns and starting player
const linkX = "Link";
const zeldaO = "Zelda";
let turn = linkX;

// Define scores for each player
let linkScore = 0;
let zeldaScore = 0;

// Get DOM elements
const boxes = document.querySelectorAll(".box");
const resultMessage = document.querySelector(".result");
const nextRoundButton = document.querySelector(".nextRound");
const resetButton = document.querySelector(".reset");
const linkScoreCounter = document.querySelector(".scorecounter1");
const zeldaScoreCounter = document.querySelector(".scorecounter2");

// Initialize the game board
let gameBoard = ["", "", "", "", "", "", "", "", ""];

// Add event listeners to game board boxes
boxes.forEach((box) => {
  box.addEventListener("click", handleClick);
});

// Function to handle player turn and update game board
function handleClick(event) {
  const targetBox = event.target;

  if (targetBox.textContent !== "") {
    event.preventDefault();
    return;
  }

  targetBox.classList.toggle("link", turn === linkX);
  targetBox.classList.toggle("zelda", turn === zeldaO);

  const boxIndex = targetBox.id.substring(1);
  gameBoard[boxIndex] = turn;

  if (checkWin()) {
    endGame(false);
  } else if (checkTie()) {
    endGame(true);
  } else {
    turn = turn === linkX ? zeldaO : linkX;
    resultMessage.textContent = `${turn}'s turn`;
  }
}

// Function to check if the game has been won
function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombinations.some((combination) => {
    const [a, b, c] = combination;
    return gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
  });
}

// Function to check if the game is tied
function checkTie() {
  return gameBoard.every((box) => box !== "");
}

// Function to end the game
function endGame(isTie) {
    const winner = turn === linkX ? linkX : zeldaO;
  
    if (isTie) {
      resultMessage.textContent = "It's a tie!";
    } else {
      resultMessage.textContent = `${winner} wins!`;
      if (winner === linkX) {
        linkScore++;
        linkScoreCounter.textContent = linkScore;
      } else {
        zeldaScore++;
        zeldaScoreCounter.textContent = zeldaScore;
      }
    }

  // Disable game board after game has ended
  boxes.forEach((box) => {
    box.removeEventListener("click", handleClick);
  });

  // Show next round button
  nextRoundButton.classList.remove("hidden");
}
nextRoundButton.addEventListener("click", newRound);

function newRound() {
    // Reset game board
    gameBoard = ["", "", "", "", "", "", "", "", ""];
  
    // Reset player turn and result message
    turn = linkX;
    resultMessage.textContent = `${turn}'s turn`;
  
    // Reset game board appearance
    boxes.forEach((box) => {
      box.textContent = "";
      box.classList.remove("link", "zelda");
    });
  
    // Enable game board after starting new round
    boxes.forEach((box) => {
      box.addEventListener("click", handleClick);
    })
  
    // Hide next round button
    nextRoundButton.classList.add("hidden");
  }

