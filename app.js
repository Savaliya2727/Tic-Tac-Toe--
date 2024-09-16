let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let mag = document.querySelector("#msg");

let turnO = true;  //platerX & platerO
let count = 0;  // To Track Draw

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            // platyerO
            box.innerText = "O";
            turnO = false;
        } else {
            // playarX
            box.innerText = "x";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if ( count === 9 && !isWinner) {
            gameDraw();
        }   
    });
});

const gameDraw = () => {
    msg.innerText = 'game was a Draw.';
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const disabledBoxes = () => {
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
    msg.innerText = 'congratulation, winner is ${winner}';
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (po === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return true;
            }
        }
    }
};

newGameBtn.addEventListener("Click", resetGame);
resetBtn.addEventListener("click", resetGame);