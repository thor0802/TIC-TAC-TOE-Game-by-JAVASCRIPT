let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //platerO
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
];
let count = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.textContent = "O";
      box.style.color = "#b0413e";
      turn0 = false;
    } else {
      box.textContent = "X";
      box.style.color = "black";
      turn0 = true;
    }
    box.disabled = true;
    count++;
    checkWinner();
    if (count === 9) {
      msg.innerText = "It's a Draw!";
      msgContainer.classList.remove("hide");
    }
  });
});
const resetGame = () => {
  turn0 = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `CONGRATULATION, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};
newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
