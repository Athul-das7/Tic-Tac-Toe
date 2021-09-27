let playerTurn;
let cellElements = document.getElementsByClassName("cell");
console.log(cellElements);
cellElements.forEach((cell) => {
  cell.addEventListener("click", addClass);
});

function addClass(e) {
  let cell = e.target;
  cell.classList.add("x");
}
