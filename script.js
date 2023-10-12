// Welcome to Tic Tae Toe

// Setting Turn
let turn = "X";
let gameOver = false;

let change_turn = () => {
   return turn === "X" ? "O" : "X";
}

// Setting Game Logic
let boxes = document.getElementsByClassName('boxes');
Array.from(boxes).forEach(e => {
    let boxText = e.querySelector('.boxtext');
    e.addEventListener('click', () => {
        if(boxText.innerText === "") {
            boxText.innerText = turn;
            turn = change_turn();
            check_result();
            if(!gameOver) {
                document.getElementsByClassName("info")[0].innerText = `Turn for ${turn}`;
            }
        }
    });
});

// Setting the Winning Status
let check_result = () => {
    let boxText = document.getElementsByClassName("boxtext");
    let conditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    conditions.forEach(e => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.getElementsByClassName("info")[0].innerText = boxText[e[0]].innerText + " Won :)";
            document.querySelector(".status-container").classList.add("show-status");
            document.getElementsByClassName("status")[0].innerText = boxText[e[0]].innerText + " Won :)";
            gameOver = true;
        }
    })
}

// Setting the Reset Option
reset.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll(".boxtext");
    Array.from(boxTexts).forEach(e => {
        e.innerText = "";
    });
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = `Turn for ${turn}`;
    document.querySelector(".status-container").classList.remove("show-status");
})
