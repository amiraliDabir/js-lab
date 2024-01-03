//variables
const d = document;
let btn = d.querySelector("button");
let cells = d.querySelectorAll(".cell");
let box = d.querySelector(".showStatus");
let gameContainer = d.querySelector(".gameContainer")
let chars = [];
let xArr = [];
let oArr = [];
let winnerOptions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]



// functions
function random(randCh, randNum) {
    randNum = Math.floor(Math.random() * 2);
    if (randNum == 0) {
        randCh = "X"
    }
    else {
        randCh = "O";
    }
    return randCh;
}

function fillCell(ev, ch) {
    ch = random();
    if (chars.length == 0) {
        ev.target.textContent = ch;
        if (ch == "X") {
            xArr.push(Number(ev.target.getAttribute("id")))
            ev.target.style = "color:blue"
        }
        else {
            oArr.push(Number(ev.target.getAttribute("id")))
            ev.target.style = "color:red"
        }
        chars.push(ch);
    }
    else if (chars[chars.length - 1] == "X" && ev.target.textContent == "") {
        ev.target.textContent = "O";
        chars.push("O");
        oArr.push(Number(ev.target.getAttribute("id")))
        ev.target.style = "color:red"
    }
    else if (chars[chars.length - 1] == "O" && ev.target.textContent == "") {
        ev.target.textContent = "X";
        chars.push("X");
        xArr.push(Number(ev.target.getAttribute("id")))
        ev.target.style = "color:blue"
    }

    checkWinner();

}



function checkWinner() {
    let c = 0;
    for (let i = 0; i < winnerOptions.length; i++) {
        for (let j = 0; j < winnerOptions[i].length; j++) {
            for (let z = 0; z < xArr.length; z++) {
                if (winnerOptions[i][j] == xArr[z]) c++;
            }
        }
        if (c == 3) {
            Stop();
            box.style = "display:flex"
            box.textContent = "X is winner"
            c = 0;
        }
        else {
            c = 0;

        }
    }

    for (let i = 0; i < winnerOptions.length; i++) {
        for (let j = 0; j < winnerOptions[i].length; j++) {
            for (let z = 0; z < oArr.length; z++) {
                if (winnerOptions[i][j] == oArr[z]) {
                    c++;
                }
            }
        }
        if (c == 3) {
            Stop();
            box.style = "display:flex"
            box.textContent = "O is winner"
        }
        else {
            c = 0;

        }
    }

}


function Stop() {
    gameContainer.classList.add("freeze");
}


function restart() {
    oArr.length = 0;
    xArr.length = 0;
    chars.length = 0;
    cells.forEach(item => item.textContent = "");
    gameContainer.classList.remove("freeze");
    box.style = "display:none"
}






//events
cells.forEach((cell) => cell.addEventListener("click", fillCell));
btn.addEventListener("click", restart);