const x = "x",
  o = "o";
const restart = document.getElementById("restart");
let playerTurn = x;
let win = document.getElementById("win");
let cellElements = document.querySelectorAll("[datacell]");
const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cellElements.forEach((cell) => {
  cell.addEventListener("click", addClass);
});

function addClass(e) {
  let cell = e.target;
  cell.classList.add(playerTurn);
  if (wonGame(playerTurn)) {
    winMessage(true);
  } else if (draw()) {
    winMessage(false);
  } else {
    if (playerTurn == x) playerTurn = o;
    else playerTurn = x;
  }
}

function wonGame(presentPlayer) {
  return wins.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(presentPlayer);
    });
  });
}

function winMessage(player) {
  if (player) {
    win.innerText = `Player ${playerTurn == "x" ? "X" : "O"} won`;
  } else {
    win.innerText = "Its a Draw";
  }
  setTimeout(() => {
    location.reload();
  }, 2000);
}

function draw() {
  return [...cellElements].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("o");
  });
}

restart.addEventListener("click", function () {
  location.reload();
});
