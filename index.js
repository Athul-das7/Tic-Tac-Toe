const x = "x",
  o = "o";
let playerTurn = x;
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
    console.log(playerTurn + " won");
  }
  if (playerTurn == x) playerTurn = o;
  else playerTurn = x;
}

function wonGame(presentPlayer) {
  return wins.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(presentPlayer);
    });
  });
}
